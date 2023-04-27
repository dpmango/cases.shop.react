ssh root@195.2.75.40 << EOF
  cd /home/nobody.su
  git checkout main
  git stash
  git pull
  npm i
  npm run build
  pm2 start ecosystem.config.js
EOF
