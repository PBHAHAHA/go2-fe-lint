#!/usr/bin/env sh

# 跑出异常信息

set -e
push_addr=`git remote get-url --push origin`
commit_info=`git describe --all --always --long`
dist_path=`docs\.vuepreess\dist`
push_branch=go2-fe-docs
npm run docs:build

cd $dist_path

git init
git add -A
git commit -m 'deploy: $commit_info'
git push $push_addr HEAD:$push_branch
cd -
rm -rf $dist_path