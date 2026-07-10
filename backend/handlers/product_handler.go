package handlers

import (
	"net/http"
	"strings"
	"github.com/gin-gonic/gin"
	"github.com/gosimple/slug"
	"github.com/sheiza31/app-ecommerce/config"
	"github.com/sheiza31/app-ecommerce/models"
	"github.com/sheiza31/app-ecommerce/requests"
	"github.com/sheiza31/app-ecommerce/response"
)

// GetAllProducts — GET /api/v1/product?color=&category_id=&sort=price_asc|price_desc
func GetAllProducts(c *gin.Context) {
	var products []models.Product

	color      := c.Query("color")
	categoryID := c.Query("category_id")
	sortParam  := c.Query("sort")
	// searchKeyword := c.Query("search")

	// if searchKeyword != "" {
	// 	query = query.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(searchKeyword)+"%")
	// }

	query := config.DB.Preload("ProductsVariants")

	if categoryID != "" {
		query = query.Where("category_id = ?", categoryID)
	}

	if color != "" {
		query = query.Where(
			"id IN (?)",
			config.DB.Model(&models.ProductVariant{}).
				Select("product_id").
				Where("LOWER(color) = LOWER(?)", color),
		)
	}

	switch sortParam {
	case "price_asc":
		query = query.Order("price ASC")
	case "price_desc":
		query = query.Order("price DESC")
	default:
		query = query.Order("created_at DESC")
	}

	if tx := query.Find(&products); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to fetch products", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Products fetched successfully", products)
}

// GetProductByID — GET /api/v1/product/:id
func GetProductByID(c *gin.Context) {
	var product models.Product
	if tx := config.DB.Preload("ProductsVariants").First(&product, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Product not found", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product fetched successfully", product)
}

// GetProductColors — GET /api/v1/product/colors
func GetProductColors(c *gin.Context) {
	var colors []string
	if tx := config.DB.Model(&models.ProductVariant{}).
		Distinct("color").
		Where("color != ''").
		Pluck("color", &colors); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to fetch colors", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Colors fetched successfully", colors)
}

// CreateProduct — POST /api/v1/product
func CreateProduct(c *gin.Context) {
	var req requests.ProductRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid request", err)
		return
	}

	productSlug := req.Slug
	if productSlug == "" {
		productSlug = strings.ReplaceAll(slug.Make(req.Name), "-", "-")
	}

	product := models.Product{
		Name:        req.Name,
		Slug:        productSlug,
		Description: req.Description,
		Price:       req.Price,
		CategoryID:  req.CategoryID,
	}

	if tx := config.DB.Create(&product); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to create product", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusCreated, "Product created successfully", product)
}

// UpdateProduct — PUT /api/v1/product/:id
func UpdateProduct(c *gin.Context) {
	var product models.Product
	if tx := config.DB.First(&product, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Product not found", tx.Error)
		return
	}

	var req requests.ProductRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid request", err)
		return
	}

	product.Name        = req.Name
	product.Description = req.Description
	product.Price       = req.Price
	product.CategoryID  = req.CategoryID
	if req.Slug != "" {
		product.Slug = req.Slug
	}

	if tx := config.DB.Save(&product); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to update product", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product updated successfully", product)
}

// DeleteProduct — DELETE /api/v1/product/:id
func DeleteProduct(c *gin.Context) {
	var product models.Product
	if tx := config.DB.Delete(&product, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to delete product", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Product deleted successfully", nil)
}
