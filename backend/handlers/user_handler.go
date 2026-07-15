package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

// GetAllUsers - Admin only: Ambil semua data user
func GetAllUsers(c *gin.Context) {
	var users []models.User

	if err := config.DB.Find(&users).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Gagal mengambil data user", err)
		return
	}

	// Hilangkan password dari response
	type UserResponse struct {
		ID      uint   `json:"ID"`
		Name    string `json:"name"`
		Email   string `json:"email"`
		Phone   string `json:"phone"`
		Address string `json:"address"`
		Role    string `json:"role"`
		Avatar  string `json:"avatar"`
	}

	var result []UserResponse
	for _, u := range users {
		result = append(result, UserResponse{
			ID:      u.ID,
			Name:    u.Name,
			Email:   u.Email,
			Phone:   u.Phone,
			Address: u.Address,
			Role:    u.Role,
			Avatar:  u.Avatar,
		})
	}

	response.SuccessJSON(c, http.StatusOK, "Berhasil mengambil data user", result)
}

// DeleteUser - Admin only: Hapus user berdasarkan ID
func DeleteUser(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "ID tidak valid", err)
		return
	}

	var user models.User
	if err := config.DB.First(&user, id).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "User tidak ditemukan", err)
		return
	}

	if err := config.DB.Delete(&user).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Gagal menghapus user", err)
		return
	}

	response.SuccessJSON(c, http.StatusOK, "User berhasil dihapus", nil)
}
