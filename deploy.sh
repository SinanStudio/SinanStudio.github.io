#!/usr/bin/env sh

# 遇到错误退出
set -e

# dos2unix deploy.sh

git config --local user.name "JianNei"
git config --local user.email "longjian.huang@aliyun.com"
git config --global credential.helper store

# 拉取代码进行编辑
git pull origin gh-pages

# 提交代码到 github 触发 Travis Ci 部署到静态站点
git add -A
yarn commit
git push origin gh-pages