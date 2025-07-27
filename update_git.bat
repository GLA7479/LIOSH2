@echo off
cd /d "%~dp0"
git diff --quiet
IF %ERRORLEVEL% EQU 0 (
    echo ====================================
    echo ⚠️  אין שינויים לעדכן!
    echo ====================================
    timeout /t 3 >nul
    exit
)

start powershell -NoExit -Command "& {
    Write-Host '===============================' -ForegroundColor Cyan
    Write-Host '📂 Changing directory to LIOTSH2...' -ForegroundColor Yellow
    Set-Location '%~dp0'

    Write-Host '===============================' -ForegroundColor Cyan
    Write-Host '🔄 Adding changes...' -ForegroundColor Yellow
    git add .

    Write-Host '===============================' -ForegroundColor Cyan
    Write-Host '🔄 Committing changes...' -ForegroundColor Yellow
    git commit -m 'Auto Update'

    Write-Host '===============================' -ForegroundColor Cyan
    Write-Host '🔄 Pulling latest changes...' -ForegroundColor Yellow
    git pull origin main --rebase

    Write-Host '===============================' -ForegroundColor Cyan
    Write-Host '🚀 Pushing to GitHub...' -ForegroundColor Yellow
    git push origin main

    Write-Host '===============================' -ForegroundColor Cyan
    Write-Host '✅ Done! Window will stay open' -ForegroundColor Green
}"
