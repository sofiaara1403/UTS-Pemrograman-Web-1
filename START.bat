@echo off
title PJH Company Starter
echo ===============================
echo   Menjalankan PJH Company
echo ===============================

REM --- Start Apache XAMPP ---
echo Menjalankan Apache...
start "" "C:\xampp\xampp_start.exe"

REM --- Jalankan API (Node.js) ---
echo Menjalankan API...
cd /d C:\xampp\htdocs\utspemweb1\api
start cmd /k "node server.js"

REM --- Buka Website ---
echo Membuka Website...
start "" http://localhost/utspemweb1/website/index.html

echo ===============================
echo   Selesai! Website sedang berjalan
echo ===============================

pause
