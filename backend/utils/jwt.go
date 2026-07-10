package utils

import (
	"time"
	"github.com/golang-jwt/jwt/v5"
)

// Ganti pake secret key lu sendiri, simpen di .env lebih bagus
var JWT_SECRET_KEY = []byte("rahasia_ilahi_123_jangan_sampai_bocor")

// GenerateToken bakal bikin token JWT yang isinya ID User dan expired dalam 24 jam
func GenerateToken(userID uint) (string, error) {
	// 1. Tentukan Claims (isi data di dalam token)
	claims := jwt.MapClaims{
		"user_id": userID,
		"exp":     time.Now().Add(time.Hour * 24).Unix(), // Expired 24 jam ke depan
		"iat":     time.Now().Unix(),                    // Waktu token dibuat
	}

	// 2. Buat token pake algoritma HS256 dan claims-nya
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// 3. Sign token pake Secret Key kita biar valid
	tokenString, err := token.SignedString(JWT_SECRET_KEY)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}