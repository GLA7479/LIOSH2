@echo off
cd /d "%~dp0"

REM ✅ שלב 1 - הוספת כל השינויים
git add .

REM ✅ שלב 2 - יצירת commit עם תאריך ושעה (גם אם אין שינויים)
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set DATE=%%d-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set TIME=%%a-%%b
git commit --allow-empty -m "Auto update - %DATE% %TIME%"

REM ✅ שלב 3 - ביצוע push ל-GitHub
git push origin main

echo.
echo ==========================================
echo 🚀 השינויים הועלו ל-GitHub בהצלחה!
echo ==========================================

REM ✅ שלב 4 - פתיחת האתר שלך ב-Vercel
start https://liosh-2.vercel.app/

pause
