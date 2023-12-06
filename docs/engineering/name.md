---
title: 命名规范
categories:
  - 命名规范
tags:
  - 命名规范
author:
  name: pub
  link: https://github.com/pbhahaha/go2-fe-spec
---

# 命名规范

## 1.0 项目命名规范

全部采用小写方式， 以中划线分隔。

正例：`mall-management-system`

反例：`mall_management-system` / `mallManagementSystem`

## 2.0 目录命名规范

全部采用小写方式， 以中划线分隔。有复数结构时，要采用复数命名法， 缩写不用复数

正例：`mall-management-system/src/main/java/com/mall/management/system/service`

反例：`mall_management-system/src/main/java/com/mall/management/system/service` / `mallManagementSystem/src/main/java/com/mall/management/system/service`

【特殊】VUE 的项目中的 components 中的组件目录，使用 kebab-case 命名

正例： `head-search` / `page-loading` / `authorized` / `notice-icon`

反例： `HeadSearch` / `PageLoading`

【特殊】VUE 的项目中的除 components 组件目录外的所有目录也使用 kebab-case 命名
正例： `page-oneQ / `shopping-car` / `user-management`

反例： `ShoppingCar` / `UserManagement`

## 3.0 JS、CSS、LESS、HTML、PNG 文件命名

全部采用小写方式， 以中划线分隔

正例： `render-dom.js` / `signup.css` / `index.html` / `company-logo.png` / `signup.less`

反例： `renderDom.js` / `UserManagement.html`

<!--加粗 -->

### 杜绝完全不规范的缩写，避免望文不知义：

反例：AbstractClass“缩写”命名成 AbsClass；condition“缩写”命名成 condi，此类随意缩写严重降低了代码的可阅读性。