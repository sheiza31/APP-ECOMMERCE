package handlers

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

func GetMyOrders(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", nil)
		return
	}

	var orders []models.Order
	if err := config.DB.
		Preload("OrderItems.Product.ProductsVariants").
		Where("user_id = ?", userID).
		Order("created_at DESC").
		Find(&orders).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to fetch orders", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Orders retrieved successfully",
		"data":    orders,
	})
}
func GetAllOrders(c *gin.Context) {
	var orders []models.Order

	err := config.DB.
		Preload("User").
		Preload("OrderItems").
		Preload("OrderItems.Product").
		Find(&orders).Error

	if err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to fetch orders", err)
		return
	}

	response.SuccessJSON(c, http.StatusOK, "Success", orders)
}
func UpdateOrder(c *gin.Context) {
	var request struct {
		OrderStatus string `json:"order_status"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Invalid request", err)
		return
	}

	var order models.Order
	if err := config.DB.First(&order, c.Param("id")).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Order not found", err)
		return
	}

	order.OrderStatus = request.OrderStatus
	if err := config.DB.Save(&order).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to update order", err)
		return
	}

	response.SuccessJSON(c, http.StatusOK, "Order updated successfully", order)
}

func DeleteOrder(c *gin.Context) {
	var order models.Order
	if err := config.DB.First(&order, c.Param("id")).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Order not found", err)
		return
	}

	if err := config.DB.Delete(&order).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to delete order", err)
		return
	}

	response.SuccessJSON(c, http.StatusOK, "Order deleted successfully", nil)
}
