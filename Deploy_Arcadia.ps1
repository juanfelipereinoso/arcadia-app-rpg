# =====================================================
# 🚀 Deploy_Arcadia.ps1 — Despliegue automatizado Eureka Labs
# Autor: Juan Felipe Reinoso | Eureka Labs 💜
# Proyecto: Arcadia — Comunidad viva
# =====================================================

Write-Host "🚀 [Eureka Labs] Iniciando despliegue Arcadia..." -ForegroundColor Cyan

# 1️⃣ Limpiar build anterior
Write-Host "🧹 Limpiando carpeta dist..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item "dist" -Recurse -Force -ErrorAction SilentlyContinue
}

# 2️⃣ Compilar con Vite
Write-Host "🏗️ Ejecutando build de producción..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: la compilación falló. Revisa tu código antes de continuar." -ForegroundColor Red
    exit 1
}

# 3️⃣ Preparar commit automático
$date = Get-Date -Format "yyyy-MM-dd HH:mm"
$commitMessage = "🚀 Deploy automático Arcadia — Eureka Labs ($date)"

Write-Host "💾 Agregando y confirmando cambios en Git..." -ForegroundColor Yellow
git add .
git commit -m "$commitMessage"

# 4️⃣ Subir a GitHub (esto dispara el deploy automático en Firebase)
Write-Host "☁️ Subiendo cambios a GitHub (rama main)..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ No se pudo subir a GitHub. Revisa tu conexión o credenciales." -ForegroundColor Red
    exit 1
}

# 5️⃣ Mensaje final
Write-Host ""
Write-Host "✅ [Eureka Labs] Arcadia desplegada correctamente en Firebase Hosting." -ForegroundColor Green
Write-Host "🌐 URL: https://arcadiaapp-dev.web.app" -ForegroundColor Cyan
Write-Host "🕓 Fecha: $date" -ForegroundColor Gray
Write-Host ""
Write-Host "💜 Gracias por usar el sistema de despliegue Eureka Labs. Que el código te acompañe." -ForegroundColor Magenta
