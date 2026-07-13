package handlers
import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/requests"
	"github.com/sheiza31/app-ecommerce/backend/response"
	"github.com/gosimple/slug"
	"strings"
)

func GetAllCategories(c *gin.Context) {
	var categories []models.Category
	if tx := config.DB.Find(&categories); tx.Error != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Categories not found", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Categories fetched successfully", categories)
}

func GetCategoryByID(c *gin.Context) {
	var category models.Category
	config.DB.First(&category, c.Param("id"))
	response.SuccessJSON(c, http.StatusOK, "Category fetched successfully", category)
} 

func CreateCategory(c *gin.Context) {
    var req requests.CategoryRequest

    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }

    category := models.Category{
        Name:        req.Name,
        Slug:        strings.ReplaceAll(slug.Make(req.Name), "-", " "),
        Description: req.Description,
    }

    if err := config.DB.Create(&category).Error; err != nil {
        response.ErrorJSON(c, http.StatusBadRequest, "Failed create category", err)
        return
    }

    response.SuccessJSON(c, http.StatusCreated, "Category created successfully", category)
}
func UpdateCategory(c *gin.Context) {
	var request requests.CategoryRequest
	var category models.Category
	if tx := config.DB.First(&category, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Categories not found", tx.Error)
		return
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Failed update category", err)
		return
	}
	category.Name = request.Name
	category.Slug = strings.ReplaceAll(slug.Make(request.Name), " ", "_")
	category.Description = request.Description

	if tx := config.DB.Save(&category); tx.Error != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Failed update category", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Categories updated successfully", category)
}

func DeleteCategory(c *gin.Context) {
	var category models.Category
	if tx := config.DB.Delete(&category, c.Param("id")); tx.Error != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Categories not found", tx.Error)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Categories deleted successfully", category)
}
