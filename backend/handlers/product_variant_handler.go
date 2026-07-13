package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/requests"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

// GetAllProductVariants — GET /api/v1/product-variant?product_id=1
func GetAllProductVariants(c *gin.Context) {
	var variants []models.ProductVariant
	query := config.DB.Model(&models.ProductVariant{})

	if productID := c.Query("product_id"); productID != "" {
		query = query.Where("product_id = ?", productID)
	}

	if tx := query.Find(&variants); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to fetch product variants", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product variants fetched successfully", variants)
}

// GetProductVariantByID — GET /api/v1/product-variant/:id
func GetProductVariantByID(c *gin.Context) {
	var variant models.ProductVariant
	if tx := config.DB.First(&variant, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Product variant not found", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product variant fetched successfully", variant)
}

// CreateProductVariant — POST /api/v1/product-variant
func CreateProductVariant(c *gin.Context) {
	var req requests.ProductVariantRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid request", err)
		return
	}

	// Validate product exists
	var product models.Product
	if tx := config.DB.First(&product, req.ProductID); tx.Error != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Product not found", tx.Error)
		return
	}

	variant := models.ProductVariant{
		ProductID: req.ProductID,
		Name:      req.Name,
		Sku:       req.Sku,
		Price:     req.Price,
		Stock:     req.Stock,
		Image:     req.Image,
		Color:     req.Color,
		Size:      req.Size,
	}

	if tx := config.DB.Create(&variant); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to create product variant", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusCreated, "Product variant created successfully", variant)
}

// UpdateProductVariant — PUT /api/v1/product-variant/:id
func UpdateProductVariant(c *gin.Context) {
	var variant models.ProductVariant
	if tx := config.DB.First(&variant, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Product variant not found", tx.Error)
		return
	}

	var req requests.ProductVariantRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid request", err)
		return
	}

	variant.Name  = req.Name
	variant.Sku   = req.Sku
	variant.Price = req.Price
	variant.Stock = req.Stock
	variant.Image = req.Image
	variant.Color = req.Color
	variant.Size  = req.Size

	if tx := config.DB.Save(&variant); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to update product variant", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product variant updated successfully", variant)
}

// DeleteProductVariant — DELETE /api/v1/product-variant/:id
func DeleteProductVariant(c *gin.Context) {
	var variant models.ProductVariant
	if tx := config.DB.Delete(&variant, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to delete product variant", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product variant deleted successfully", nil)
}
