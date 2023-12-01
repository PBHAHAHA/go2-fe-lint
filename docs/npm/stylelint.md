---
title: stylelint-config
categories:
  - 工程规范
tags:
  - 工程规范
---

# go2-fe-stylelint-config

:::tip
 CSS 规范
:::

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-go2 stylelint stylelint-scss --save-dev

# 如果是vue + css 项目需要引入 postcss-html 
npm install postcss-html --save-dev

# 如果是 vue + scss项目需要引入 postcss-scss
npm install postcss-scss --save-dev

# 如果是 vue + less项目需要引入 postcss-less
npm install postcss-less --save-dev

```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "stylelint-config-go2"
}
```