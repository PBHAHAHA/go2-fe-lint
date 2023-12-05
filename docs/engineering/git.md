---
title: GIT 提交规范
categories:
  - git规范
tags:
  - git规范
author:
  name: pub
  link: https://github.com/pbhahaha/go2-fe-spec
---

# GIT 提交规范


### 1 类型

- feat: 新功能
- fix: bug修复
- docs: 仅文档更改
- style: 不影响代码含义的更改（空白、格式设置、缺失 分号等）
- refactor: 既不修复bug也不添加特性的代码更改
- perf: 改进性能的代码更改
- test: 添加缺少的测试或更正现有测试
- chore: 对构建过程或辅助工具和库（如文档）的更改


### 提交频率

每增加一个功能就提交一次，每修复一个bug就提交一次，每改进一个性能就提交一次，每改进一个文档就提交一次，每改进一个库就提交一次。

### 2 格式

```BASH
git commit -m 'feat: 新增了xxx功能'
git commit -m 'fix: 修复了xxxbug'
git commit -m 'docs: 仅文档更改'
git commit -m 'style: xxx页面样式更改'
git commit -m 'refactor: 既不修复bug也不添加特性的代码更改'
git commit -m 'perf: 改进性能的代码更改'
```