package main
import (
	"github.com/sheiza31/app-ecommerce/backend/routers"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/seeders"
	"github.com/joho/godotenv"
	"fmt"
)


func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("Info: Tidak bisa load file .env, membaca dari OS env")
	}
	config.ConnectDB()
	config.DB.AutoMigrate(&models.Category{})
	config.DB.AutoMigrate(&models.User{})
	config.DB.AutoMigrate(&models.Order{})
	config.DB.AutoMigrate(&models.OrderItems{})
	config.DB.AutoMigrate(&models.Product{})
	config.DB.AutoMigrate(&models.ProductVariant{})
	config.DB.AutoMigrate(&models.Cart{}) 
	config.DB.AutoMigrate(&models.CartItems{})
	config.DB.AutoMigrate(&models.Transactions{})
	seeders.RunSeeder()
	config.InitOAuthConfig()
	router := routers.SetupRouter()
	router.Run(":8080")
}