ssh root@195.2.75.40 << EOF
  cd /home/root
  git checkout 2.1
  git stash
  git pull
  npm i
  npm run build
  pm2 stop all
  pm2 start ecosystem.config.cjs
EOF

#git@github_cases_shop_react:dpmango/cases.shop.react.git
