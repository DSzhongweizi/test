git init
git add .
git commit -m "deploy"
git branch -M main
git remote add origin git@github.com:DSzhongweizi/test.git
git push -f origin main