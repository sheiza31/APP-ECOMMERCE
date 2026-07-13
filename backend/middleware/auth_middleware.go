package middleware

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/sheiza31/app-ecommerce/backend/response"
	"github.com/sheiza31/app-ecommerce/backend/utils"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", fmt.Errorf("missing Authorization header"))
			c.Abort()
			return
		}

		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", fmt.Errorf("invalid Authorization header format"))
			c.Abort()
			return
		}

		tokenString := parts[1]
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			return utils.JWT_SECRET_KEY, nil
		})

		if err != nil || !token.Valid {
			response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", fmt.Errorf("invalid or expired token"))
			c.Abort()
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", fmt.Errorf("invalid token claims"))
			c.Abort()
			return
		}

		// Ensure user_id exists in claims
		userIDFloat, ok := claims["user_id"].(float64)
		if !ok {
			response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", fmt.Errorf("invalid user_id in token"))
			c.Abort()
			return
		}

		// Ambil role dari claims
		role, _ := claims["role"].(string)

		c.Set("user_id", uint(userIDFloat))
		c.Set("role", role)
		c.Next()
	}
}
