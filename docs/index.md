---
home: true
heroText: 购商云汇
tagline: 前端编码规范工程化
actionText: 立刻进入 →
actionLink: /coding/html.md

features:
  - title: 全面的前端生态
    details: 支持前端全部生态，无需关注环境，支持直接使用
  - title: 完善的规范配件
    details: 支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级
  - title: 完整的测试用例
    details: 配套完整的测试用例，帮助您提升项目健壮性
---

## :star: 设计目的

为了提高购商云汇前端团队的开发协作效率、提高代码质量、减少项目维护成本。需要开发一个统一的前端项目规范脚手架工具

</br>

## :couch_and_lamp: 配套工具

我们引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | NPM 包                                                                                       |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [encode-fe-eslint-config](https://www.npmjs.com/package/encode-fe-eslint-config)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [encode-fe-stylelint-config](https://www.npmjs.com/package/encode-fe-stylelint-config)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [encode-fe-commitlint-config](https://www.npmjs.com/package/encode-fe-commitlint-config)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [encode-fe-markdownlint-config](https://www.npmjs.com/package/encode-fe-markdownlint-config) |
| Eslint 插件                                                       | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [encode-fe-eslint-plugin](https://www.npmjs.com/package/encode-fe-eslint-plugin)             |

[encode-fe-lint](https://www.npmjs.com/package/encode-fe-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[encode-fe-lint](https://www.npmjs.com/package/encode-fe-lint) 方便地为项目接入全部规范。

</br>

## :link: 链接

- **购商云汇官网**: <http://www.gogoo.cn/>
</br>