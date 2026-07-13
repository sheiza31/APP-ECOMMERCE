package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/handlers"
	"github.com/sheiza31/app-ecommerce/backend/handlers/auth"
	"github.com/sheiza31/app-ecommerce/backend/middleware"
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
    router.Static("/uploads", "./uploads")

	{
    v1 := router.Group("/api/v1/auth")
    v1.POST("/register", auth.Register)
    v1.POST("/login", auth.Login)
    v1.POST("/logout",auth.Logout)
    v1.POST("/forgot-password",auth.ForgotPassword)
    v1.PATCH("/update-password",auth.UpdatePassword)
    v1.GET("/google/login", auth.GoogleLogin)  
    v1.GET("/google/callback", auth.GoogleCallback)
    
    // Protected auth routes (semua role yang sudah login bisa akses)
    protectedAuth := router.Group("/api/v1/auth")
    protectedAuth.Use(middleware.AuthMiddleware())
    protectedAuth.GET("/me", auth.GetMe)
    protectedAuth.PATCH("/me", auth.UpdateMe)
  }

  // Cart routes — hanya untuk USER biasa
  {
    cartGroup := router.Group("/api/v1")
    cartGroup.Use(middleware.AuthMiddleware(), middleware.UserOnly())
    cartGroup.GET("/cart", handlers.GetCart)
    cartGroup.POST("/cart", handlers.AddToCart)
    cartGroup.DELETE("/cart/:product_id", handlers.RemoveFromCart)
    cartGroup.DELETE("/cart", handlers.ClearCart)
  }
  
  {
    // Order / Checkout routes — hanya untuk USER biasa
    orderGroup := router.Group("/api/v1")
    orderGroup.Use(middleware.AuthMiddleware(), middleware.UserOnly())
    orderGroup.POST("/order", handlers.CheckoutCart)
    orderGroup.GET("/order/me", handlers.GetMyOrders)
    orderGroup.POST("/order/qris", handlers.CreateQRISPayment)
  }

  // Midtrans webhook — public (dipanggil Midtrans server)
  {
    v2 := router.Group("/api/v1")
    v2.POST("/midtrans/webhook", handlers.MidtransNotification)

    // Category routes — hanya ADMIN yang bisa create/update/delete
    v2.GET("/category", handlers.GetAllCategories)
    v2.GET("/category/:id", handlers.GetCategoryByID)

    adminCategory := router.Group("/api/v1")
    adminCategory.Use(middleware.AuthMiddleware(), middleware.AdminOnly())
    adminCategory.POST("/category", handlers.CreateCategory)
    adminCategory.PUT("/category/:id", handlers.UpdateCategory)
    adminCategory.DELETE("/category/:id", handlers.DeleteCategory)
  }

  {
    adminOrder := router.Group("/api/v1")
    adminOrder.Use(middleware.AuthMiddleware(), middleware.AdminOnly())
    adminOrder.GET("/order", handlers.GetAllOrders)
    adminOrder.PUT("/order/:id", handlers.UpdateOrder)
    adminOrder.DELETE("/order/:id", handlers.DeleteOrder)
  }

  {
    v3 := router.Group("/api/v1")
    // Product routes — GET public, CUD hanya ADMIN
    v3.GET("/product", handlers.GetAllProducts)
    v3.GET("/product/colors", handlers.GetProductColors)
    v3.GET("/product/:id", handlers.GetProductByID)
    v3.GET("/product-variant", handlers.GetAllProductVariants)
    v3.GET("/product-variant/:id", handlers.GetProductVariantByID)

    adminProduct := router.Group("/api/v1")
    adminProduct.Use(middleware.AuthMiddleware(), middleware.AdminOnly())
    adminProduct.POST("/product", handlers.CreateProduct)
    adminProduct.PUT("/product/:id", handlers.UpdateProduct)
    adminProduct.DELETE("/product/:id", handlers.DeleteProduct)
    adminProduct.POST("/product-variant", handlers.CreateProductVariant)
    adminProduct.PUT("/product-variant/:id", handlers.UpdateProductVariant)
    adminProduct.DELETE("/product-variant/:id", handlers.DeleteProductVariant)
  }

  return router
}
