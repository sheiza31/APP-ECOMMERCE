package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/handlers"
	"github.com/sheiza31/app-ecommerce/handlers/auth"
  "github.com/gin-contrib/cors"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()
 // GANTI cors.Default() dengan ini:
    router.Use(cors.New(cors.Config{
        AllowOriginFunc:  func(origin string) bool { return true },
        AllowMethods:     []string{"POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization", "Accept"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
    }))
	{
    v1 := router.Group("/api/v1/auth")
    v1.POST("/register", auth.Register)
    v1.POST("/login", auth.Login)
    v1.POST("/logout",auth.Logout)
    v1.POST("/forgot-password",auth.ForgotPassword)
    v1.PATCH("/update-password",auth.UpdatePassword)
    v1.GET("/google/login", auth.GoogleLogin)     
    v1.GET("/google/callback", auth.GoogleCallback)
  }

  // Simple group: v2 
  {
    v2 := router.Group("api/v1")
    v2.POST("/category",handlers.CreateCategory)
    v2.GET("/category",handlers.GetAllCategories)
    v2.GET("/category/:id",handlers.GetCategoryByID)
    v2.PUT("/category/:id",handlers.UpdateCategory)
    v2.DELETE("/category/:id",handlers.DeleteCategory)
  }

  {
    v3 := router.Group("api/v1")
    // Product routes
    v3.GET("/product", handlers.GetAllProducts)
    v3.GET("/product/colors", handlers.GetProductColors)
    v3.GET("/product/:id", handlers.GetProductByID)
    v3.POST("/product", handlers.CreateProduct)
    v3.PUT("/product/:id", handlers.UpdateProduct)
    v3.DELETE("/product/:id", handlers.DeleteProduct)
    // Product variant routes
    v3.GET("/product-variant", handlers.GetAllProductVariants)
    v3.GET("/product-variant/:id", handlers.GetProductVariantByID)
    v3.POST("/product-variant", handlers.CreateProductVariant)
    v3.PUT("/product-variant/:id", handlers.UpdateProductVariant)
    v3.DELETE("/product-variant/:id", handlers.DeleteProductVariant)
  }

  return router
}
