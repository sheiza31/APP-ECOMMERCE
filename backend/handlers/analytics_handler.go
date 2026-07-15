package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/response"
)

type DashboardMetrics struct {
	TotalRevenue    float64 `json:"totalRevenue"`
	TotalOrders     int64   `json:"totalOrders"`
	ActiveCustomers int64   `json:"activeCustomers"`
	ConversionRate  float64 `json:"conversionRate"` // Hardcoded or calculated later
}

type RevenueTrend struct {
	Date    string  `json:"date"`
	Revenue float64 `json:"revenue"`
}

type TopProduct struct {
	ID           uint    `json:"id"`
	ProductName  string  `json:"productName"`
	Image        string  `json:"image"`
	Category     string  `json:"category"`
	Price        float64 `json:"price"`
	Stock        int     `json:"stock"`
	UnitsSold    int     `json:"unitsSold"`
	TotalRevenue float64 `json:"totalRevenue"`
	Status       string  `json:"status"`
}

type CustomerAcquisition struct {
	Channel    string `json:"channel"`
	Percentage int    `json:"percentage"`
}

func GetDashboardAnalytics(c *gin.Context) {
	// 1. Metrics (Total Revenue, Orders, Customers)
	var metrics DashboardMetrics
	
	config.DB.Table("orders").Select("COALESCE(SUM(total_price), 0)").Scan(&metrics.TotalRevenue)
	config.DB.Table("orders").Where("deleted_at IS NULL").Count(&metrics.TotalOrders)
	config.DB.Table("orders").Where("deleted_at IS NULL").Select("COUNT(DISTINCT user_id)").Scan(&metrics.ActiveCustomers)
	metrics.ConversionRate = 3.4

	// 2. Revenue Trends (Last 7 days)
	var trends []RevenueTrend
	now := time.Now()
	for i := 6; i >= 0; i-- {
		targetDate := now.AddDate(0, 0, -i).Format("2006-01-02")
		
		var dailyRevenue float64
		config.DB.Table("orders").
			Select("COALESCE(SUM(total_price), 0)").
			Where("created_at >= ? AND created_at <= ?", targetDate+" 00:00:00", targetDate+" 23:59:59").
			Where("deleted_at IS NULL").
			Scan(&dailyRevenue)
			
		trends = append(trends, RevenueTrend{
			Date:    now.AddDate(0, 0, -i).Format("Jan 02"),
			Revenue: dailyRevenue,
		})
	}

	// 3. Top Products — with real image from product_variants and category from categories
	var topProducts []TopProduct
	query := `
		SELECT 
			p.id,
			p.name as product_name,
			COALESCE(c.name, 'Uncategorized') as category,
			p.price,
			p.stock,
			COALESCE(SUM(oi.quantity), 0) as units_sold,
			COALESCE(SUM(oi.subtotal), 0) as total_revenue,
			COALESCE((
				SELECT pv.image FROM product_variants pv
				WHERE pv.product_id = p.id AND pv.image != '' AND pv.deleted_at IS NULL
				LIMIT 1
			), '') as image
		FROM products p
		LEFT JOIN categories c ON p.category_id = c.id AND c.deleted_at IS NULL
		JOIN order_items oi ON p.id = oi.product_id
		WHERE p.deleted_at IS NULL
		GROUP BY p.id, p.name, c.name, p.price, p.stock
		ORDER BY units_sold DESC
		LIMIT 10
	`
	config.DB.Raw(query).Scan(&topProducts)

	// Set status based on real product stock
	for i := range topProducts {
		switch {
		case topProducts[i].Stock > 50:
			topProducts[i].Status = "In Stock"
		case topProducts[i].Stock > 10:
			topProducts[i].Status = "Low Stock"
		case topProducts[i].Stock > 0:
			topProducts[i].Status = "Critical Stock"
		default:
			topProducts[i].Status = "Out of Stock"
		}
		// Prefix image path with backend URL if it's a local path
		if topProducts[i].Image != "" && len(topProducts[i].Image) > 0 && topProducts[i].Image[0] == '/' {
			topProducts[i].Image = "http://localhost:8080" + topProducts[i].Image
		}
	}

	// 4. Customer Acquisition (Mocked as discussed)
	acquisition := []CustomerAcquisition{
		{Channel: "Direct Search", Percentage: 42},
		{Channel: "Social Media", Percentage: 28},
		{Channel: "Email Marketing", Percentage: 18},
		{Channel: "Paid Referral", Percentage: 12},
	}

	response.SuccessJSON(c, http.StatusOK, "Analytics retrieved successfully", gin.H{
		"metrics":             metrics,
		"revenueTrends":       trends,
		"topProducts":         topProducts,
		"customerAcquisition": acquisition,
	})
}
