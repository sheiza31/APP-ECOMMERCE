package seeders

import (
	"log"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
)

func ProductSeeder() {
	// Pastikan ada kategori Fashion (ID biasanya 2 dari CategorySeeder)
	var fashionCat models.Category
	config.DB.Where("slug = ?", "fashion").First(&fashionCat)
	if fashionCat.ID == 0 {
		// fallback: ambil category pertama
		config.DB.First(&fashionCat)
	}

	products := []struct {
		product  models.Product
		variants []models.ProductVariant
	}{
		{
			product: models.Product{
				Name:        "Structured Wool Overcoat",
				Slug:        "structured-wool-overcoat",
				Description: "A professional studio photograph of a minimalist tailored wool overcoat in charcoal grey.",
				Price:       450.00,
				CategoryID:  fashionCat.ID,
			},
			variants: []models.ProductVariant{
				{Name: "Charcoal / M", Sku: "SWO-CHAR-M", Price: 450.00, Stock: 10, Color: "charcoal", Size: "M",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCINIu-htK4j4cKAm11i3CDudsIKIILO0-N8mZgnxL618eDSIRZ0pC2sVHikrXcg7mqOI8TLtxsOCDUCWjppyK3BL7YT9v7f_RxOCfOXfki4estw9M3D6sFbeW2Eu4Ij8WTQhCZWeAfLOFTlQFcjvWTaBu6oII5qW2SMbpLSo6xhmQF-5YSxCfwsgMgxgefZi-5qbXxZrtCqD5WYV1yVlXlUmSFaonhACu8KaMwCXV_Xwos1YpEsflFggHVe8kWWVBjVQEk2JGyI4g"},
				{Name: "Black / M", Sku: "SWO-BLK-M", Price: 450.00, Stock: 8, Color: "black", Size: "M",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCINIu-htK4j4cKAm11i3CDudsIKIILO0-N8mZgnxL618eDSIRZ0pC2sVHikrXcg7mqOI8TLtxsOCDUCWjppyK3BL7YT9v7f_RxOCfOXfki4estw9M3D6sFbeW2Eu4Ij8WTQhCZWeAfLOFTlQFcjvWTaBu6oII5qW2SMbpLSo6xhmQF-5YSxCfwsgMgxgefZi-5qbXxZrtCqD5WYV1yVlXlUmSFaonhACu8KaMwCXV_Xwos1YpEsflFggHVe8kWWVBjVQEk2JGyI4g"},
			},
		},
		{
			product: models.Product{
				Name:        "Pure Cashmere Turtleneck",
				Slug:        "pure-cashmere-turtleneck",
				Description: "Close-up shot of a high-quality cashmere turtleneck sweater in a soft beige bone color.",
				Price:       280.00,
				CategoryID:  fashionCat.ID,
			},
			variants: []models.ProductVariant{
				{Name: "Bone / S", Sku: "PCT-BONE-S", Price: 280.00, Stock: 15, Color: "white", Size: "S",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdlehsDQ_MNX8A-QyzAuKTl7QbxGjwrzIZQ5tEU8SfJ-axnvOSQUOrsYrm4Rg1hLumR_cQ5INWq3EcP-M0yTNid1T9XSVM5RkXgMFTxNX5WI7bmtK1hEEadJpecvQvFb9IXSZhzekeLmJhPWxOO5u-brjX2kdo3V36N4w3YDd4As3BuO0c4nvoo5qQaNww_K5sGL241O7fKTgfkeiJDGXokZSIo0aveLHJQ02etNtIPY6dt8cDg6-gPKqtIAe7vHgxq3wgP_aTfak"},
				{Name: "Slate / S", Sku: "PCT-SLT-S", Price: 280.00, Stock: 10, Color: "slate", Size: "S",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdlehsDQ_MNX8A-QyzAuKTl7QbxGjwrzIZQ5tEU8SfJ-axnvOSQUOrsYrm4Rg1hLumR_cQ5INWq3EcP-M0yTNid1T9XSVM5RkXgMFTxNX5WI7bmtK1hEEadJpecvQvFb9IXSZhzekeLmJhPWxOO5u-brjX2kdo3V36N4w3YDd4As3BuO0c4nvoo5qQaNww_K5sGL241O7fKTgfkeiJDGXokZSIo0aveLHJQ02etNtIPY6dt8cDg6-gPKqtIAe7vHgxq3wgP_aTfak"},
			},
		},
		{
			product: models.Product{
				Name:        "Wide-Leg Linen Trousers",
				Slug:        "wide-leg-linen-trousers",
				Description: "Wide shot of modern wide-leg trousers in deep navy linen.",
				Price:       195.00,
				CategoryID:  fashionCat.ID,
			},
			variants: []models.ProductVariant{
				{Name: "Black / M", Sku: "WLT-BLK-M", Price: 195.00, Stock: 20, Color: "black", Size: "M",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ062iiWUafoS0MkUnAT4etpk05RgP2fRgqHNKFJcNfLKXRoHDusp7kuRfvhv735O-4P7dM1sZAyXgaSaJzMJDBi6sLgxTYEQ4eWwmkOG0PyVx5eHaAxxUC6kQAwR0u0cKGL93Vk09VQhSwneRKp8Zs-kF-dzxRtQKU0NfFEmB6E-CcaCzFrQebaGS4xXrD5Zwlpp-O987zEi-zJUxOHhuvoQtv_xRfa4ves1T-v6uS3O9hrsS7f0VNKlAvezeD7osgjlQd7b_LG8"},
			},
		},
		{
			product: models.Product{
				Name:        "Architectural Leather Tote",
				Slug:        "architectural-leather-tote",
				Description: "Still life image of a sculptural black leather tote bag with clean lines.",
				Price:       520.00,
				CategoryID:  fashionCat.ID,
			},
			variants: []models.ProductVariant{
				{Name: "Black / One Size", Sku: "ALT-BLK-OS", Price: 520.00, Stock: 5, Color: "black", Size: "One Size",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdeXo3Lx3ho4UL9FF8Ncd2tyKX4pSGYyNvwgxWQyazEPPMLMgdHLUQj4oJlkUlVW4ghS3UYi6tzor4fi5Jm6a4nhfcI-wkjbt57z5FmU-e5ZitQXedFUih-t1S4Ydwlax6lpbCuVr0xjjaaTA3d-hgK6dQNdUwx0sP4v_GRsXq_-fLtEG-NNpnfst9I9e2e6lryXAzseRw9RX2vFcKU7zCDKFhwMfcdEs4LsCFQj-LtBKuoYTFrk2E8jfjpiXLn8qSL97FLCwYr6c"},
			},
		},
		{
			product: models.Product{
				Name:        "Essential Fine-Knit Polo",
				Slug:        "essential-fine-knit-polo",
				Description: "A minimalist fine-knit polo shirt in a subtle sage grey.",
				Price:       140.00,
				CategoryID:  fashionCat.ID,
			},
			variants: []models.ProductVariant{
				{Name: "Stone / M", Sku: "EFP-STN-M", Price: 140.00, Stock: 25, Color: "stone", Size: "M",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwnw83illgfWwE6Ga1ONHz_diAsvQTHnmhP1B417BzGEj1l2e1scjLroY6TP6kUfRTkK67jB4EKyFDPOl3wqUy9NBJh_zDgHJI8-V6rhFS51KjBDMHMgIUbquGL9LVY54zGibEqYe-qO_NNGy-CPGWmQDGTA76GtczCU9t1UOsINgP-Jp4jKjF4y8S_l9TSoa6FfCq2M0p479yM0dOxYl8SIOrdoBYJcswDDUBfCr6XZxz_tpKFdbQBvmpkKvGhk6i7fzqoIe75K0"},
				{Name: "Slate / M", Sku: "EFP-SLT-M", Price: 140.00, Stock: 18, Color: "slate", Size: "M",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwnw83illgfWwE6Ga1ONHz_diAsvQTHnmhP1B417BzGEj1l2e1scjLroY6TP6kUfRTkK67jB4EKyFDPOl3wqUy9NBJh_zDgHJI8-V6rhFS51KjBDMHMgIUbquGL9LVY54zGibEqYe-qO_NNGy-CPGWmQDGTA76GtczCU9t1UOsINgP-Jp4jKjF4y8S_l9TSoa6FfCq2M0p479yM0dOxYl8SIOrdoBYJcswDDUBfCr6XZxz_tpKFdbQBvmpkKvGhk6i7fzqoIe75K0"},
			},
		},
		{
			product: models.Product{
				Name:        "Linear Leather Sneakers",
				Slug:        "linear-leather-sneakers",
				Description: "A pair of sleek, minimalist white leather sneakers with a clean sole.",
				Price:       310.00,
				CategoryID:  fashionCat.ID,
			},
			variants: []models.ProductVariant{
				{Name: "White / 40", Sku: "LLS-WHT-40", Price: 310.00, Stock: 12, Color: "white", Size: "40",
					Image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaSWLVq3t3wYntIHS-iZLCdWZ8Ilbi19vZw4nD4wXFffd0VPeywD2aamM_98mNGjYy1JEyv9tYanKQOihrq4M57nHKJNHpnzFzSsAuEFETXyLqvycKIDMKG0LPE2XRhXy2per26vfejPEw_2P72fMPsaDwY9lp_K52fRyWgiH1em9Xja0rk2Nmrvl4Jcxd-w_nZMrCrvFmK7v90RgLc8NDFt7SB3vsPQLvbBhCoKLCu4PVm4Da0mkr0P1-x4NXGUgUL4xx6k_byeg"},
			},
		},
	}

	for i := range products {
		var existing models.Product
		result := config.DB.Where("slug = ?", products[i].product.Slug).First(&existing)
		if result.Error != nil {
			// Product doesn't exist, create it
			if err := config.DB.Create(&products[i].product).Error; err != nil {
				log.Printf("Failed to seed product %s: %v", products[i].product.Name, err)
				continue
			}
			// Create variants
			for j := range products[i].variants {
				products[i].variants[j].ProductID = products[i].product.ID
				if err := config.DB.Where("sku = ?", products[i].variants[j].Sku).
					FirstOrCreate(&products[i].variants[j]).Error; err != nil {
					log.Printf("Failed to seed variant %s: %v", products[i].variants[j].Sku, err)
				}
			}
		}
	}

	log.Println("Product & ProductVariant successfully seeded")
}
