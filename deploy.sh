ssh root@94.103.84.59 << EOF
  cd /home/root
  git checkout 2.0
  git stash
  git pull
  npm i
  npm run build
  pm2 stop all
  pm2 start ecosystem.config.cjs
EOF
