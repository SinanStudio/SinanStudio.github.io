#!/usr/bin/env sh

# 遇到错误退出
set -e

# 拉取代码进行编辑
git pull

# 提交代码到 github 触发 Travis Ci 部署到静态站点
git add -A
yarn commit
git push