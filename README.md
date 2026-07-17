# 🛒 APP-ECOMMERCE (Backend API)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Report Card](https://goreportcard.com/badge/github.com/sheiza31/APP-ECOMMERCE)](https://goreportcard.com/report/github.com/sheiza31/APP-ECOMMERCE)

**APP-ECOMMERCE** adalah layanan backend API modern berbasis **Golang** yang dirancang untuk mendukung ekosistem toko online. Proyek ini mengimplementasikan performa tinggi khas Go, arsitektur yang bersih, serta proses pengembangan yang cepat menggunakan fitur *live-reload*.

---

## ✨ Fitur Utama (Backend)

- **Otentikasi Pengguna**: Registrasi, Login, dan manajemen sesi menggunakan **JWT (JSON Web Tokens)**.
- **RESTful API Katalog**: CRUD produk, manajemen kategori, pencarian, dan filtering dinamis.
- **Sistem Keranjang & Transaksi**: Endpoint untuk manajemen *shopping cart*, checkout pesanan, dan kalkulasi otomatis.
- **Integrasi Payment Gateway**: Webhook dan API integration untuk simulasi pembayaran (misal: Midtrans / Stripe).
- **Manajemen Stok Aman**: Transaksi database yang aman untuk mencegah masalah *race condition* pada stok barang.

---

## 🛠️ Teknologi yang Digunakan

- **Bahasa Pemrograman**: [Go (Golang)](https://go.dev/) (v1.20+)
- **Web Framework / Router**: Gin*
- **ORM / Database Driver**: GORM / MYSQL /
- **Database**: MySQL
- **Live Reload Tool**: [Air](https://github.com/air-verse/air)

---

## 🚀 Memulai (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan server backend ini di lingkungan lokal Anda:

### 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
1. **Go (Golang)** (versi terbaru direkomendasikan)
2. **Database** (PostgreSQL atau MySQL) yang sudah aktif berjalan
3. **Air** untuk *live reloading*. Jika belum punya, instal dengan perintah:
   ```bash
   go install [github.com/air-verse/air@latest](https://github.com/air-verse/air@latest)
   
Clone Repository
   git clone [https://github.com/sheiza31/APP-ECOMMERCE.git](https://github.com/sheiza31/APP-ECOMMERCE.git)
cd APP-ECOMMERCE

install depedency 
go mod tidy
konfigurasi environtment
cp .env.example .env

Running Frontend 
./frontend 
npm install
npm run dev
