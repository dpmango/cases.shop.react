ssh root@94.103.84.160 << EOF
  cd cases.shop.react
  git checkout main
  git fetch --all
  git reset --hard origin/main
  yarn
  yarn build
  pm2 delete all
  pm2 start npm --name front -- run serve
EOF
