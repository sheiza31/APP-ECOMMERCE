package response

import (
	"github.com/gin-gonic/gin"
)

func JSON(c *gin.Context, status int, message string, data interface{}) {
	c.JSON(status, gin.H{
		"status": status,
		"message": message,
		"data": data,
	})
}

func SuccessJSON(c *gin.Context, status int, message string, data interface{}) {
	c.JSON(status, gin.H{
		"status": status,
		"message": message,
		"data": data,
	})
}

func ErrorJSON(c *gin.Context, status int, message string, data interface{}) {
	c.JSON(status, gin.H{
		"status": status,
		"message": message,
		"data": data,
	})

	
}
	func UpdateJSON(c *gin.Context, status int, message string, data interface{}) {
		c.JSON(status, gin.H{
			"status": status,
			"message": message,
			"data": data,
		})
	}