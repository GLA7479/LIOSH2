# שלב 1 - הוספת קבצים
git add .

# שלב 2 - יצירת commit (גם אם אין שינוי זה ינסה לדחוף)
git commit -m "Auto deploy - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" --allow-empty

# שלב 3 - דחיפה ל-GitHub
git push origin main

# שלב 4 - קריאה ל-Deploy Hook של Vercel
$deployHook = "https://api.vercel.com/v1/integrations/deploy/prj_K1oL2OMtiOQgURo2SVXULEcWhalS/1BrFvv4rWA"
$response = Invoke-WebRequest -Uri $deployHook -Method POST

# שלב 5 - פלט תגובה
Write-Host "Deploy Hook Response:" $response.StatusCode $response.StatusDescription
Write-Host "Output:" $response.Content
pause
