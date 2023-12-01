---
title: go2-fe-lint
categories:
  - 脚手架
tags:
  - 脚手架
---

# go2-fe-lint

:::tip
 工程化 脚手架，可以一键接入所有配置
:::


### 安装

```shell
npm i -g go2-fe-lint
```

### 命令
可以通过`go2-fe-lint -h`查看帮助信息

```shell
go2 -h
```

init 初始化项目 lint 相关配置
```shell
go2 init
```


:::warning 注意
vue项目中如果使用了 `unplugin-auto-import` 这个自动引入的包,则会有变量未定义的eslint冲突
:::

解决方法：

1. 打开 `vue.config.js` 文件，在 `configureWebpack` 中添加如下配置
```js
AutoImport({
  imports: ['vue'],
  extensions: ['vue', 'md'],
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  resolvers: [ArcoResolver()],
  // ---需要将eslintrc的enabled设置为true---
  eslintrc: {
    enabled: true,
  },
}),

``` 
2. 运行的时候会自动生成一个 `.eslintrc-auto-import.json`文件
3. 修改 `.eslintrc.json` 中的配置,添加到extends中
```JSON
  "extends": [ ... ,"./.eslintrc-auto-import.json" ]
```