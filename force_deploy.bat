@echo off
echo 🔄 Updating GitHub and forcing Vercel deploy...

:: שלב 1 - עדכון GIT
git add .
git commit -m "Force deploy update" || echo No changes to commit
git push origin main

:: שלב 2 - קריאה ל־Deploy Hook
curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_K1oL2OMtiOQgURo2SVXULEcWhalS/1BrFvv4rWA"

echo ✅ Done! Website will redeploy on Vercel.
pause
