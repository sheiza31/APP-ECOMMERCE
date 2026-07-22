package main
import (
	"github.com/sheiza31/app-ecommerce/backend/routers"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/seeders"
	"github.com/joho/godotenv"
	"fmt"
	"log"
)


func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("Info: Tidak bisa load file .env, membaca dari OS env")
	}
	config.ConnectDB()

	// AutoMigrate semua tabel — pastikan semua berhasil sebelum lanjut
	migrations := []interface{}{
		&models.Category{},
		&models.User{},
		&models.Order{},
		&models.OrderItems{},
		&models.Product{},
		&models.ProductVariant{},
		&models.Cart{},
		&models.CartItems{},
		&models.Transactions{},
	}
	for _, model := range migrations {
		if err := config.DB.AutoMigrate(model); err != nil {
			log.Fatalf("[AutoMigrate] Gagal migrate %T: %v", model, err)
		}
	}
	fmt.Println("[DB] Semua tabel berhasil di-migrate")

	seeders.RunSeeder()
	config.InitOAuthConfig()
	router := routers.SetupRouter()
	router.Run(":8080")
}