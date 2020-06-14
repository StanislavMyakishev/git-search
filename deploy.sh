#!/usr/bin/env sh
set -e
cd build
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/StanislavMyakishev/stanislavmyakishev.github.io.git master
cd -