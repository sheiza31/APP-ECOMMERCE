package middleware

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

// AdminOnly memastikan hanya user dengan role "admin" yang bisa akses route
func AdminOnly() gin.HandlerFunc {
	return func(c *gin.Context) {
		role, exists := c.Get("role")
		if !exists {
			response.ErrorJSON(c, http.StatusForbidden, "Forbidden", fmt.Errorf("role tidak ditemukan di token"))
			c.Abort()
			return
		}

		if role != "admin" {
			response.ErrorJSON(c, http.StatusForbidden, "Forbidden", fmt.Errorf("hanya admin yang bisa mengakses resource ini"))
			c.Abort()
			return
		}

		c.Next()
	}
}

// UserOnly memastikan hanya user dengan role "user" yang bisa akses route
func UserOnly() gin.HandlerFunc {
	return func(c *gin.Context) {
		role, exists := c.Get("role")
		if !exists {
			response.ErrorJSON(c, http.StatusForbidden, "Forbidden", fmt.Errorf("role tidak ditemukan di token"))
			c.Abort()
			return
		}

		if role != "user" {
			response.ErrorJSON(c, http.StatusForbidden, "Forbidden", fmt.Errorf("hanya user biasa yang bisa mengakses resource ini"))
			c.Abort()
			return
		}

		c.Next()
	}
}
