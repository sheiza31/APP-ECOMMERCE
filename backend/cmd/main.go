package main
import (
	"github.com/sheiza31/app-ecommerce/routers"
	"github.com/sheiza31/app-ecommerce/config"
	"github.com/sheiza31/app-ecommerce/seeders"
	"github.com/sheiza31/app-ecommerce/models"
	"github.com/joho/godotenv"
	"fmt"
)
 
func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("Info: Tidak bisa load file .env, membaca dari OS env")
	}
	config.ConnectDB()
	seeders.RunSeeder()
	config.DB.AutoMigrate(&models.User{})
	config.InitOAuthConfig()
	config.DB.AutoMigrate(&models.Category{})
	config.DB.AutoMigrate(&models.Product{})
	config.DB.AutoMigrate(&models.ProductVariant{})
	router := routers.SetupRouter()
	router.Run(":8080")
}