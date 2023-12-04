---
title: HTML 编码规范
categories:
  - 编码规范
tags:
  - 编码规范
author:
  name: pub
  link: https://github.com/pbhahaha/go2-fe-spec
---

# HTML 编码规范

### 1.1. HTML 类型
推荐使用 HTML5 的文档类型申明： .
（建议使用 text/html 格式的 HTML。避免使用 XHTML。XHTML 以及它的属性，比如 application/xhtml+xml 在浏览器中的应用支持与优化空间都十分有限）。

- 规定字符编码
- IE 兼容模式
- 规定字符编码
- doctype 大写
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta charset="UTF-8" />
    <!-- app -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" /> 
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company" />
  </body>
</html>
```

### 1.2 缩进
缩进使用4个空格

嵌套的节点应该缩进。

### 1.3 分块注释（推荐）
在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。注释格式

### 1.4 语义化标签
HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标签

  ```html
  <!-- /* bad */ -->
  <div class="header"></div>
  <div class="footer"></div>

  <!-- /* good */ -->
  <header></header>
  <footer></footer>
  ```

### 1.5 使用双引号而不是使用单引号
单引号在 HTML 中有特殊含义，比如用来表示字符串，双引号则表示 HTML 标签。

  ```html
  <!-- /* bad */ -->
  <div class='wrap'></div>

  <!-- /* good */ -->
  <div class="wrap"></div>
  ```

### 1.6 元素间的层级关系

```HTML
<!-- good -->
<div class="item" >
    <div class="info-wrap">
        <div class="info-para1"></div>
        <div class="info-para2"></div>
    </div>
    <div class="hover-info-wrap">
        <div class="hover-info-para1"></div>
        <div class="hover-info-para2"></div>
    </div>
</div>
<!-- bad -->
<div class="item" >
    <div class="info-para1"></div>
    <div class="info-para2"></div>
    <div class="hover-info-para1"></div>
    <div class="hover-info-para2"></div>
</div>
```

### 1.7 禁止缓存的页面meta标签设置

```HTML
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache，must-revalidate">
<meta http-equiv="expires" content="0">
```

### 1.8 其他注意事项

- 非特殊情况样式文件必须在<head>...</head>之间 js文件必须在页面底部</body>之前
- 标签须闭合
- 同一个界面只能有一个h1标签利于SEO
- 商品图片须加alt属性，利于SEO和搜索引擎的爬虫
- 一般不使用标签内联样式，即标签style属性
- 不再使用css sprite（精灵图）
- 页面js代码一般需单独写一个js文件