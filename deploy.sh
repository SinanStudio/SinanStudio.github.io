#!/usr/bin/env sh

# 遇到错误退出
set -e

git config --local user.name "JianNei"
git config --local user.email "longjian.huang@aliyun.com"

# 拉取代码进行编辑
git pull origin master

# 提交代码到 github 触发 Travis Ci 部署到静态站点
git add -A
yarn commit
git push origin master