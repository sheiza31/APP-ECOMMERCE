# run.ps1 - Jalankan Go backend tanpa air
# Usage: .\run.ps1

$ErrorActionPreference = "Stop"

Write-Host "=== Building Go Backend ===" -ForegroundColor Cyan

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$tmpDir = Join-Path $scriptDir "tmp"

# Buat folder tmp jika belum ada
if (-not (Test-Path $tmpDir)) {
    New-Item -ItemType Directory -Path $tmpDir | Out-Null
}

# Build
Write-Host "[BUILD] go build -o .\tmp\main.exe .\cmd" -ForegroundColor Yellow
go build -o "$tmpDir\main.exe" "$scriptDir\cmd"

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build gagal!" -ForegroundColor Red
    exit 1
}

Write-Host "[OK] Build berhasil. Menjalankan server..." -ForegroundColor Green
Write-Host "Tekan Ctrl+C untuk berhenti`n" -ForegroundColor Gray

# Run
& "$tmpDir\main.exe"
