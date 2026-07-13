package handlers

import (
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/midtrans/midtrans-go"
	"github.com/midtrans/midtrans-go/coreapi"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

func CreateQRISPayment(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", nil)
		return
	}

	// Get active cart
	var cart models.Cart
	if err := config.DB.Preload("CartItems.Product").Where("user_id = ? AND status = 'active'", userID).First(&cart).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Cart not found", err)
		return
	}
	if len(cart.CartItems) == 0 {
		response.ErrorJSON(c, http.StatusBadRequest, "Cart is empty", nil)
		return
	}

	// Validate Stock for all items before creating QRIS request
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

	// Get user info
	var user models.User
	if err := config.DB.First(&user, userID).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "User not found", err)
		return
	}

	// Setup Midtrans client
	serverKey := strings.TrimSpace(os.Getenv("MIDTRANS_SERVER_KEY"))
	env := midtrans.Sandbox
	if strings.TrimSpace(os.Getenv("MIDTRANS_ENV")) == "production" {
		env = midtrans.Production
	}

	coreClient := coreapi.Client{}
	coreClient.New(serverKey, env)

	// Build order number
	orderNumber := fmt.Sprintf("LUMINA-%d-%d", userID, time.Now().Unix())

	// Build item details
	var itemDetails []midtrans.ItemDetails
	for _, item := range cart.CartItems {
		productName := "Product"
		if item.Product.Name != "" {
			productName = item.Product.Name
		}
		itemDetails = append(itemDetails, midtrans.ItemDetails{
			ID:    fmt.Sprintf("PROD-%d", item.ProductID),
			Name:  productName,
			Price: int64(item.Price),
			Qty:   int32(item.Quantity),
		})
	}

	// Shipping fee as item
	itemDetails = append(itemDetails, midtrans.ItemDetails{
		ID:    "SHIPPING",
		Name:  "Shipping Fee",
		Price: 12,
		Qty:   1,
	})

	grossAmount := int64(cart.TotalPrice) + 12

	// Create QRIS charge request
	chargeReq := &coreapi.ChargeReq{
		PaymentType: coreapi.PaymentTypeQris,
		TransactionDetails: midtrans.TransactionDetails{
			OrderID:  orderNumber,
			GrossAmt: grossAmount,
		},
		Items: &itemDetails,
		CustomerDetails: &midtrans.CustomerDetails{
			FName: user.Name,
			Email: user.Email,
			Phone: user.Phone,
		},
		Qris: &coreapi.QrisDetails{
			Acquirer: "gopay",
		},
	}

	chargeResponse, midtransErr := coreClient.ChargeTransaction(chargeReq)
	if midtransErr != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to create QRIS payment: "+midtransErr.GetMessage(), nil)
		return
	}

	// Save order in DB
	order := models.Order{
		UserID:        userID.(uint),
		OrderNumber:   orderNumber,
		TotalPrice:    cart.TotalPrice + 12,
		PaymentMethod: "qris",
		PaymentStatus: "pending",
		OrderStatus:   "pending",
	}
	config.DB.Create(&order)

	// Save order items
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
		PaymentMethod: "qris",
		Status:        "pending",
		Amount:        float64(grossAmount),
	}
	config.DB.Create(&transaction)

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "QRIS payment created",
		"data": gin.H{
			"order_id":     chargeResponse.OrderID,
			"qr_code_url":  chargeResponse.QRString,
			"actions":      chargeResponse.Actions,
			"gross_amount": grossAmount,
			"expire_time":  chargeResponse.ExpiryTime,
			"order_number": orderNumber,
		},
	})
}

func MidtransNotification(c *gin.Context) {
	var notificationPayload map[string]interface{}

	if err := c.ShouldBindJSON(&notificationPayload); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid JSON payload", err)
		return
	}

	orderID, exists := notificationPayload["order_id"].(string)
	if !exists {
		response.ErrorJSON(c, http.StatusBadRequest, "order_id not found in payload", nil)
		return
	}

	transactionStatus, _ := notificationPayload["transaction_status"].(string)
	fraudStatus, _ := notificationPayload["fraud_status"].(string)

	var order models.Order
	if err := config.DB.Where("order_number = ?", orderID).First(&order).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Order not found", err)
		return
	}

	// Determine new status
	paymentStatus := order.PaymentStatus
	orderStatus := order.OrderStatus

	if transactionStatus == "capture" {
		if fraudStatus == "challenge" {
			paymentStatus = "challenge"
		} else if fraudStatus == "accept" {
			paymentStatus = "paid"
			orderStatus = "processing"
		}
	} else if transactionStatus == "settlement" {
		paymentStatus = "paid"
		orderStatus = "processing"
	} else if transactionStatus == "cancel" || transactionStatus == "deny" || transactionStatus == "expire" {
		paymentStatus = "failed"
		orderStatus = "cancelled"
	} else if transactionStatus == "pending" {
		paymentStatus = "pending"
	}

	// Update order
	order.PaymentStatus = paymentStatus
	order.OrderStatus = orderStatus
	config.DB.Save(&order)

	// Update Transaction Record
	var transaction models.Transactions
	if err := config.DB.Where("order_id = ?", order.ID).First(&transaction).Error; err == nil {
		transaction.Status = paymentStatus
		config.DB.Save(&transaction)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Notification processed successfully",
	})
}

