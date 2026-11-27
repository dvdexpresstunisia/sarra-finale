@echo off
chcp 65001 >nul
title Sarra-Final - Launcher (Mode Demo Direct)
color 0A

echo.
echo ==========================================
echo   Sarra-Final - Avatar IA (MODE DEMO)
echo   Gemini direct depuis le frontend
echo ==========================================
echo.

cd /d "d:\avatar-sarra\Sarra-Final"

:: [1/3] Dependances
echo [1/3] Verification des dependances...
call npm install >nul 2>&1
echo   OK - Dependances pretes
echo.

:: [2/3] Ports
echo [2/3] Liberation des ports...
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":5173.*LISTENING"') do taskkill /PID %%p /F >nul 2>&1
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000.*LISTENING"') do taskkill /PID %%p /F >nul 2>&1
echo   OK - Ports 5173 et 3000 liberes
echo.

:: [3/3] Services
echo [3/3] Demarrage des services...
echo.

:: Backend de capture (vision écran) — 127.0.0.1:3000, ne requiert pas de cle API.
start "Sarra - Backend Capture (3000)" cmd /k "title Backend 3000 && npm run start-server"

start "Sarra - Frontend Vite (5173)" cmd /k "title Frontend 5173 && npm run dev"

echo   Attente de Vite (5173) et Backend (3000)...
node -e "const http=require('http');const check=(url,hdrs)=>new Promise(ok=>{const r=http.get(url,{headers:hdrs||{},timeout:1000},res=>{res.resume();ok(res.statusCode===200);});r.on('error',()=>ok(false));r.on('timeout',()=>{r.destroy();ok(false);});});(async()=>{for(let i=0;i<60;i++){const v1=await check('http://localhost:5173/');const v=v1?true:await check('http://127.0.0.1:5173/');const b=await check('http://127.0.0.1:3000/api/health',{'X-Sarra-Client':'sarra-desktop'});if(v?b:false){console.log('Health check OK: 5173 + 3000');process.exit(0);}await new Promise(r=>setTimeout(r,500));}console.error('ERREUR: Vite (5173) ou Backend (3000) injoignable apres 30s.');process.exit(1);})();"
if errorlevel 1 (
    echo.
    echo ==========================================
    echo   ERREUR - Echec health check 5173 / 3000
    echo ==========================================
    echo   Electron n'a pas ete lance pour eviter un repli file://.
    pause
    exit /b 1
)

start "Sarra - Electron Overlay" cmd /k "title Electron Overlay && set NODE_ENV=development && npm run electron-dev"

echo.
echo ==========================================
echo   OK - Services lances
echo ==========================================
echo   - Vite   : http://localhost:5173
echo   - Overlay: fenetre Electron transparente
echo   - Backend: http://127.0.0.1:3000 (capture ecran / vision)
echo.
echo   Entrez votre cle Gemini dans le panneau :
echo   Ctrl+Shift+K onglet "IA" (une seule cle suffit).
echo   Raccourci : Ctrl+Shift+K = panneau de configuration
echo.
echo   Fermez cette fenetre pour arreter les services.
echo ==========================================
echo.

:wait
timeout /t 5 /nobreak >nul
tasklist /fi "imagename eq node.exe" /fo csv 2>nul | findstr /i "node.exe" >nul
if %errorlevel%==0 goto wait

echo.
echo Arret en cours...
taskkill /fi "WINDOWTITLE eq Sarra - Backend*" /f >nul 2>&1
taskkill /fi "WINDOWTITLE eq Backend 3000" /f >nul 2>&1
taskkill /fi "WINDOWTITLE eq Sarra - Frontend*" /f >nul 2>&1
taskkill /fi "WINDOWTITLE eq Sarra - Electron*" /f >nul 2>&1
echo OK - Services arretes.
pause
