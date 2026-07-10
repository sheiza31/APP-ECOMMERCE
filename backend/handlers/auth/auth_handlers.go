package auth

import (
	"net/http"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/sheiza31/app-ecommerce/config"
	"github.com/sheiza31/app-ecommerce/helpers"
	"github.com/sheiza31/app-ecommerce/models"
	"github.com/sheiza31/app-ecommerce/requests"
	"github.com/sheiza31/app-ecommerce/response"
	"github.com/sheiza31/app-ecommerce/utils"
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

	token, err := utils.GenerateToken(user.ID)
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
		user = models.User{
			Name:     googleUser.Name,
			Email:    googleUser.Email,
			Password: "OAUTH_USER_DUMMY_PASSWORD",
			Role:     "user",
		}
		if err := config.DB.Create(&user).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal membuat user baru"})
			return
		}
	}

	// Generate JWT Token lokal
	jwtToken, err := utils.GenerateToken(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Gagal membuat token"})
		return
	}

	// Redirect balik user ke halaman Frontend (React/NextJS) sambil bawa token-nya
	targetFrontend := "http://localhost:3000/shop?token=" + jwtToken
	c.Redirect(http.StatusMovedPermanently, targetFrontend)
}