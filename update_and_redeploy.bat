@echo off
cd /d %~dp0

echo Adding all changes to Git...
git add .

echo Creating commit...
git commit -m "Update" || echo No changes to commit.

echo Pushing to GitHub...
git push origin main

echo Force redeploy (empty commit) if nothing changed...
git commit --allow-empty -m "Force redeploy"
git push origin main

pause
