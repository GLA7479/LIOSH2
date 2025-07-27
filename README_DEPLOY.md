# LIO-TOKEN

## 🚀 איך להעלות את האתר ל-Vercel

### 1️⃣ העלאה ל-GitHub
1. פתח את GitHub ולחץ על **New Repository**.
2. תן שם לריפו: `LIO-TOKEN`.
3. פתח טרמינל בתיקיית הפרויקט והרץ:
   ```bash
   git init
   git remote add origin https://github.com/YOUR_USER/LIO-TOKEN.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### 2️⃣ קישור ל-Vercel
1. היכנס ל-[Vercel](https://vercel.com/dashboard).
2. לחץ **New Project** → בחר את הריפו `LIO-TOKEN`.
3. ודא ש־Framework = **Next.js**.
4. לחץ **Deploy**.

### 3️⃣ קובץ ENV (אם צריך)
אם אתה משתמש ב-Sanity או מפתחות API, צור קובץ `.env.local` ב-Vercel (Project Settings → Environment Variables).

### ✅ האתר יעלה לאוויר אחרי הדיפלוי הראשון!
