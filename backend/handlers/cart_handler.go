package handlers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

type AddToCartRequest struct {
	ProductID uint `json:"product_id" binding:"required"`
	Quantity  int  `json:"quantity" binding:"required,min=1"`
}

func GetCart(c *gin.Context) {
	userID, _ := c.Get("user_id")

	var cart models.Cart
	// Find active cart for user
	if err := config.DB.Preload("CartItems.Product.ProductsVariants").Where("user_id = ? AND status = 'active'", userID).First(&cart).Error; err != nil {
		// If not found, create one
		cart = models.Cart{
			UserID:     userID.(uint),
			TotalPrice: 0,
			Status:     "active",
		}
		config.DB.Create(&cart)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Cart retrieved successfully",
		"data":    cart,
	})
}

func AddToCart(c *gin.Context) {
	userID, _ := c.Get("user_id")
	
	var req AddToCartRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid request", err)
		return
	}

	// 1. Get or Create active cart
	var cart models.Cart
	if err := config.DB.Where("user_id = ? AND status = 'active'", userID).First(&cart).Error; err != nil {
		cart = models.Cart{UserID: userID.(uint), Status: "active"}
		config.DB.Create(&cart)
	}

	// 2. Check if product exists
	var product models.Product
	if err := config.DB.First(&product, req.ProductID).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Product not found", err)
		return
	}

	// 3. Check if product already in cart
	var cartItem models.CartItems
	err := config.DB.Where("cart_id = ? AND product_id = ?", cart.ID, req.ProductID).First(&cartItem).Error
	
	proposedQuantity := req.Quantity
	if err == nil {
		proposedQuantity += cartItem.Quantity
	}

	// Hitung total stock dari variant jika ada, jika tidak gunakan product.Stock
	var totalStock int
	var variants []models.ProductVariant
	config.DB.Where("product_id = ?", product.ID).Find(&variants)
	if len(variants) > 0 {
		for _, v := range variants {
			totalStock += v.Stock
		}
	} else {
		totalStock = product.Stock
	}

	if totalStock < proposedQuantity {
		errMsg := fmt.Sprintf("Stok tidak cukup untuk produk: %s (Sisa: %d)", product.Name, totalStock)
		response.ErrorJSON(c, http.StatusBadRequest, errMsg, nil)
		return
	}


	if err == nil {
		// Increment quantity
		cartItem.Quantity += req.Quantity
		cartItem.Subtotal = float64(cartItem.Quantity) * product.Price
		config.DB.Save(&cartItem)
	} else {
		// Add new item
		cartItem = models.CartItems{
			CartID:    cart.ID,
			ProductID: product.ID,
			Quantity:  req.Quantity,
			Price:     product.Price,
			Subtotal:  float64(req.Quantity) * product.Price,
		}
		config.DB.Create(&cartItem)
	}

	// 4. Recalculate cart TotalPrice
	var total float64
	config.DB.Model(&models.CartItems{}).Where("cart_id = ?", cart.ID).Select("COALESCE(sum(subtotal), 0)").Row().Scan(&total)
	cart.TotalPrice = total
	config.DB.Save(&cart)

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Item added to cart",
		"data":    cartItem,
	})
}

func RemoveFromCart(c *gin.Context) {
	userID, _ := c.Get("user_id")
	productID := c.Param("product_id")

	var cart models.Cart
	if err := config.DB.Where("user_id = ? AND status = 'active'", userID).First(&cart).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Cart not found", err)
		return
	}

	if err := config.DB.Where("cart_id = ? AND product_id = ?", cart.ID, productID).Delete(&models.CartItems{}).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to remove item", err)
		return
	}

	var total float64
	config.DB.Model(&models.CartItems{}).Where("cart_id = ?", cart.ID).Select("COALESCE(sum(subtotal), 0)").Row().Scan(&total)
	cart.TotalPrice = total
	config.DB.Save(&cart)

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "message": "Item removed from cart"})
}

func ClearCart(c *gin.Context) {
	userID, _ := c.Get("user_id")
	var cart models.Cart
	if err := config.DB.Where("user_id = ? AND status = 'active'", userID).First(&cart).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Cart not found", err)
		return
	}

	config.DB.Where("cart_id = ?", cart.ID).Delete(&models.CartItems{})
	cart.TotalPrice = 0
	config.DB.Save(&cart)

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "message": "Cart cleared"})
}

func CheckoutCart(c *gin.Context) {
	userID, _ := c.Get("user_id")

	// Parse request to get payment method
	var req struct {
		PaymentMethod string `json:"payment_method"`
	}
	c.ShouldBindJSON(&req)
	if req.PaymentMethod == "" {
		req.PaymentMethod = "credit_card" // default
	}

	var cart models.Cart
	if err := config.DB.Preload("CartItems").Where("user_id = ? AND status = 'active'", userID).First(&cart).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Cart not found", err)
		return
	}
	if len(cart.CartItems) == 0 {
		response.ErrorJSON(c, http.StatusBadRequest, "Cart is empty", nil)
		return
	}

	// Validate Stock for all items before checking out
	for _, item := range cart.CartItems {
		var product models.Product
		if err := config.DB.First(&product, item.ProductID).Error; err == nil {
			if product.Stock < item.Quantity {
				errMsg := fmt.Sprintf("Stok tidak cukup untuk produk: %s (Sisa: %d)", product.Name, product.Stock)
				response.ErrorJSON(c, http.StatusBadRequest, errMsg, nil)
				return
			}
		}
	}

	// Create Order
	order := models.Order{
		UserID:        userID.(uint),
		OrderNumber:   fmt.Sprintf("LUMINA-%d-%d", userID, time.Now().Unix()),
		TotalPrice:    cart.TotalPrice + 12,
		PaymentMethod: req.PaymentMethod,
		PaymentStatus: "paid", // simulate successful mock payment for standard methods
		OrderStatus:   "processing",
	}
	config.DB.Create(&order)

	// Save OrderItems and Decrement Stock
	for _, item := range cart.CartItems {
		orderItem := models.OrderItems{
			OrderID:   order.ID,
			ProductID: item.ProductID,
			Quantity:  item.Quantity,
			Price:     item.Price,
			Subtotal:  item.Subtotal,
		}
		config.DB.Create(&orderItem)

		// Decrement Product Stock
		var product models.Product
		if err := config.DB.First(&product, item.ProductID).Error; err == nil {
			product.Stock -= item.Quantity
			if product.Stock < 0 {
				product.Stock = 0
			}
			config.DB.Save(&product)
		}
	}

	// Mark cart as checked_out
	cart.Status = "checked_out"
	config.DB.Save(&cart)

	// Create Transaction Record
	transaction := models.Transactions{
		OrderID:       order.ID,
		PaymentMethod: order.PaymentMethod,
		Status:        order.PaymentStatus,
		Amount:        order.TotalPrice,
	}
	config.DB.Create(&transaction)

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Cart checked out successfully",
		"data":    order,
	})
}
