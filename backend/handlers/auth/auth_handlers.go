package auth

import (
	"fmt"
	"net/http"
	"path/filepath"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/helpers"
	"github.com/sheiza31/app-ecommerce/backend/models"
	"github.com/sheiza31/app-ecommerce/backend/requests"
	"github.com/sheiza31/app-ecommerce/backend/response"
	"github.com/sheiza31/app-ecommerce/backend/utils"
)

func Register(c *gin.Context) {
	var req requests.RegisterRequest

	//  MENGGUNAKAN ShouldBind agar otomatis support Form-Data & JSON
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Request tidak valid", err)
		return
	}

	// Hash password inputan user
	hashedPassword, err := helpers.HashPassword(req.Password)
	if err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Gagal hash password", err)
		return
	}

	user := models.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: hashedPassword,
		ConfirmPassword: req.ConfirmPassword,
		Address:  req.Address,
		Phone:    req.Phone, 
		Role:     req.Role,
	}

	if err := config.DB.Create(&user).Error; err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Gagal membuat user atau email sudah terdaftar", err)
		return
	}

	user.Password = ""
	response.SuccessJSON(c, http.StatusCreated, "Register berhasil", user)
}

func Login(c *gin.Context) {
	var req requests.LoginRequest
	var user models.User

	// 1. Bind input JSON dari Postman
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Field harus diisi", err)
		return
	}

	if tx := config.DB.Where("email = ?", req.Email).First(&user); tx.Error != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Email atau password salah!", tx.Error)
		return
	}

	// Menggunakan helper bcrypt buat nge-compare password input dan password hash di DB
	if err := helpers.ComparePassword(user.Password, req.Password); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Email atau password salah!", nil)
		return
	}

	token, err := utils.GenerateToken(user.ID, user.Role)
	if err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Gagal generate token login", err)
		return
	}

	dataResponse := gin.H{
		"id":       user.ID,
		"email":    user.Email,
		"password": user.Password,
		"token":    token,
		"role":     user.Role,
	}

	response.SuccessJSON(c, http.StatusOK, "Anda Berhasil Login", dataResponse)
}
func Logout(c *gin.Context) {
	authHeader := c.GetHeader("Authorization")
	
	if authHeader == "" {
		response.SuccessJSON(c, http.StatusOK, "Anda Berhasil Logout (Tidak ada session)", nil)
		return
	}
	response.SuccessJSON(c, http.StatusOK, "Anda Berhasil Logout", nil)
}

func ForgotPassword(c *gin.Context) {
	var req requests.ForgotPasswordRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Format email tidak valid", err)
		return
	}

	var user models.User
	if tx := config.DB.Where("email = ?", req.Email).First(&user); tx.Error != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Email tidak terdaftar", tx.Error)
		return 
	}

	response.SuccessJSON(c, http.StatusOK, "Email terdaftar", nil)
}

func UpdatePassword(c *gin.Context) {
	var req requests.UpdatePasswordRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		response.ErrorJSON(c, http.StatusBadRequest, "Format request salah", err)
		return
	}
	if req.NewPassword != req.ConfirmPassword {
		response.ErrorJSON(c, http.StatusBadRequest, "Password baru dan konfirmasi password tidak sama", nil)
		return
	}

	email := c.Query("email")
	if email == "" {
		response.ErrorJSON(c, http.StatusBadRequest, "Email tidak ditemukan di parameter url", nil)
		return
	}

	var user models.User
	if tx := config.DB.Where("email = ?", email).First(&user); tx.Error != nil {
		response.ErrorJSON(c, http.StatusNotFound, "Email tidak ditemukan", tx.Error)
		return 
	}

	hashedPassword, err := helpers.HashPassword(req.NewPassword)
	if err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Gagal hash password", err)
		return
	}

	if err := config.DB.Model(&user).Update("password", hashedPassword).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Gagal update password", err)
		return
	}

	response.SuccessJSON(c, http.StatusOK, "Password berhasil diupdate", nil)
}


// 1. Handler untuk nge-redirect user ke Google Login
func GoogleLogin(c *gin.Context) {
	// "state" ini buat keamanan (CSRF), sementara kita hardcode dulu
	url := config.GoogleOAuthConfig.AuthCodeURL("random-state-string")
	c.Redirect(http.StatusTemporaryRedirect, url)
}


// 2. Handler tempat Google ngirim balik kode token (Callback)
func GoogleCallback(c *gin.Context) {
	// Ambil code dari query param URL (?code=xxxxx)
	code := c.Query("code")
	if code == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Code tidak ditemukan"})
		return
	}

	// Tukarkan "code" tadi dengan Token Akses resmi dari Google
	token, err := config.GoogleOAuthConfig.Exchange(c, code)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal tukar kode token"})
		return
	}

	// Gunakan token akses tadi untuk mengambil data profil user dari Google API
	resp, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal mengambil data user"})
		return
	}
	defer resp.Body.Close()

	// Struct penampung data dari Google
	var googleUser struct {
		ID    string `json:"id"`
		Email string `json:"email"`
		Name  string `json:"name"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&googleUser); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal membaca profil"})
		return
	}

	// Cek apakah email user ini sudah terdaftar di DB
	var user models.User
	if err := config.DB.Where("email = ?", googleUser.Email).First(&user).Error; err != nil {
		// Jika belum, daftarkan sebagai user baru
		// Hash dummy password agar konsisten dengan user biasa
		hashedDummy, hashErr := helpers.HashPassword("OAUTH_USER_DUMMY_PASSWORD")
		if hashErr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal hash password oauth"})
			return
		}
		user = models.User{
			Name:     googleUser.Name,
			Email:    googleUser.Email,
			Password: hashedDummy,
			Role:     "user",
		}
		if err := config.DB.Create(&user).Error; err != nil {
			fmt.Println("[OAuth] Gagal create user:", err.Error())
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal membuat user baru", "detail": err.Error()})
			return
		}
	}


	// Generate JWT Token lokal
	jwtToken, err := utils.GenerateToken(user.ID, user.Role)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal membuat token"})
		return
	}

	// Redirect balik user ke halaman Frontend (React/NextJS) sambil bawa token-nya
	targetFrontend := "http://localhost:3000/shop?token=" + jwtToken
	c.Redirect(http.StatusMovedPermanently, targetFrontend)
}

func GetMe(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", nil)
		return
	}

	var user models.User
	if err := config.DB.First(&user, userID).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "User not found", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"message": "User found",
		"data": gin.H{
			"id": user.ID,
			"name": user.Name,
			"email": user.Email,
			"role": user.Role,
			"phone": user.Phone,
			"address": user.Address,
			"avatar": user.Avatar,
		},
	})
}

func UpdateMe(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		response.ErrorJSON(c, http.StatusUnauthorized, "Unauthorized", nil)
		return
	}

	var user models.User
	if err := config.DB.First(&user, userID).Error; err != nil {
		response.ErrorJSON(c, http.StatusNotFound, "User not found", err)
		return
	}

	// Retrieve fields from form data
	name := c.PostForm("name")
	email := c.PostForm("email")
	phone := c.PostForm("phone")
	address := c.PostForm("address")

	if name != "" {
		user.Name = name
	}
	if email != "" {
		user.Email = email
	}
	if phone != "" {
		user.Phone = phone
	}
	if address != "" {
		user.Address = address
	}

	// Handle avatar upload
	file, err := c.FormFile("avatar")
	if err == nil && file != nil {
		// Ensure unique filename using user ID
		filename := fmt.Sprintf("avatar_%d%s", user.ID, filepath.Ext(file.Filename))
		uploadPath := filepath.Join("uploads", "avatars", filename)
		
		if err := c.SaveUploadedFile(file, uploadPath); err != nil {
			response.ErrorJSON(c, http.StatusInternalServerError, "Failed to save avatar", err)
			return
		}
		// Save the public path
		user.Avatar = "/" + filepath.ToSlash(uploadPath)
	}

	if err := config.DB.Save(&user).Error; err != nil {
		response.ErrorJSON(c, http.StatusInternalServerError, "Failed to update profile", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"message": "Profile updated successfully",
		"data": gin.H{
			"id": user.ID,
			"name": user.Name,
			"email": user.Email,
			"phone": user.Phone,
			"address": user.Address,
			"avatar": user.Avatar,
			"role": user.Role,
		},
	})
}

