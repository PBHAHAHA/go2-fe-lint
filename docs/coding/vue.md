
# Vue 项目开发规范

## 前言 :id=start

Vue 项目规范以 Vue官方规范（[https://cn.vuejs.org/v2/style-guide/](https://cn.vuejs.org/v2/style-guide/)）为基础进行开发，同时参照了诸多开发团队的经验，尽量保证了该规范在不同vue团队下的的通用性和统一性。

> 注：文中提到的书写规范
> `PascalCase`（大骆驼拼写法，首字母大写）
> `camelCase`（骆驼拼写法，首字母小写）
> `kebab-case`（短横拼写法）

## 1. 组件规范


### 1.1 组件名
组件名应该始终是多个单词组成（大于等于 2），且命名规范为KebabCase格式。
这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```JS
// bad
export default {
    name: 'Todo',
    // ...
}
export default {
    name: 'todo-item',
    // ...
}
```

``` js
// good
export default {
    name: 'SearchButtonClear',
    //...
}
```

### 1.2 组件文件名
名为 pascal-case 格式

```js
// goods
components/
|- my-component.vue
```

```js
// bad
components/
|- myComponent.vue
|- MyComponent.vue
```

### 1.3 基础组件文件名为 base 开头，使用完整单词而不是缩写。

```js
// goods
components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue
```

```js
// bad
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```


### 1.4 和父组件紧密耦合的子组件应该以父组件名作为前缀命名
```JS
// good
components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）
```

```JS
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- UProfOpts.vue （使用了缩写）
```

## 2 模板中使用简单的表达式
组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。


```JS
<template>
  <p>{{ normalizedFullName }}</p>
</template>

// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```
对于组件的导出/导入，使用大驼峰 `PascalCase`

```javascript
import MyComponent from './MyComponent.vue'

export default {
    components: 'MyComponent', 
    // ... 
}
```

反例
```js
// bad
<template>
  <p>
       {{
          fullName.split(' ').map(function (word) {
             return word[0].toUpperCase() + word.slice(1)
           }).join(' ')
        }}
  </p>
</template>
```



## 3 指令都使用缩写形式

指令推荐都使用缩写形式，(用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)
正例：
```js
<input
  @input="onInput"
  @focus="onFocus"
>
```
反例：
```js
<input
  v-on:input="onInput"
  @focus="onFocus"
>
```


## 4 标签顺序保持一致
单文件组件应该总是让标签顺序保持为 `

正例：
```js
<template>...</template>
<script>...</script>
<style>...</style>
```
反例：
```js
<template>...</template>
<style>...</style>
<script>...</script>
```


## 5.必须为 v-for 设置键值 key

## 6. v-show 与 v-if 选择
如果运行时，需要非常频繁地切换，使用 v-show ；如果在运行时，条件很少改变，使用 v-if。

## 7.  Vue Router 规范


1) 页面跳转数据传递使用路由参数
页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，而不是将需要传递的数据保存 vuex，然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。

正例：
```JS
let id = ' 123';
this.$router.push({ name: 'userCenter', query: { id: id } });
```
2) 使用路由懒加载（延迟加载）机制
```JS
{
    path: '/uploadAttachment',
    name: 'uploadAttachment',
    meta: {
      title: '上传附件'
    },
    component: () => import('@/view/components/uploadAttachment/index.vue')
},
```
3) router 中的命名规范（推荐）
path、childrenPoints 命名规范采用kebab-case命名规范（尽量vue文件的目录结构保持一致，因为目录、文件名都是kebab-case，这样很方便找到对应的文件）

name 命名规范采用KebabCase命名规范且和component组件名保持一致！（因为要保持keep-alive特性，keep-alive按照component的name进行缓存，所以两者必须高度保持一致）

```JS
// 动态加载
export const reload = [
  {
    path: '/reload',
    name: 'reload',
    component: Main,
    meta: {
      title: '动态加载',
      icon: 'icon iconfont'
    },

    children: [
      {
        path: '/reload/smart-reload-list',
        name: 'SmartReloadList',
        meta: {
          title: 'SmartReload',
          childrenPoints: [
            {
              title: '查询',
              name: 'smart-reload-search'
            },
            {
              title: '执行reload',
              name: 'smart-reload-update'
            },
            {
              title: '查看执行结果',
              name: 'smart-reload-result'
            }
          ]
        },
        component: () =>
          import('@/views/reload/smart-reload/smart-reload-list.vue')
      }
    ]
  }
];
```
4) router 中的 path 命名规范（推荐）
path除了采用kebab-case命名规范以外，必须以 / 开头，即使是children里的path也要以 / 开头。如下示例

目的：

经常有这样的场景：某个页面有问题，要立刻找到这个vue文件，如果不用以/开头，path为parent和children组成的，可能经常需要在router文件里搜索多次才能找到，而如果以/开头，则能立刻搜索到对应的组件
*
```JS
{
    path: '/file',
    name: 'File',
    component: Main,
    meta: {
      title: '文件服务',
      icon: 'ios-cloud-upload'
    },
    children: [
      {
        path: '/file/file-list',
        name: 'FileList',
        component: () => import('@/views/file/file-list.vue')
      },
      {
        path: '/file/file-add',
        name: 'FileAdd',
        component: () => import('@/views/file/file-add.vue')
      },
      {
        path: '/file/file-update',
        name: 'FileUpdate',
        component: () => import('@/views/file/file-update.vue')
      }
    ]
  }
  
```