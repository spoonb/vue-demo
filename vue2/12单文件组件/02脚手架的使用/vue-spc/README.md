# 笔记

## vue-cli文件结构
  ├─node_modules // 依赖模块
  ├─public
  │  ├─favicon.ico // 页签图标
  │  └─index.html // 主页面
  ├─src
  │  ├─assets // 静态资源
  │  ├─components // 组件
  │  ├─App.vue // 汇总所有组件
  │  └─main.js // 程序入口文件
  ├─.gitignore
  ├─babel.config.js
  ├─package.json
  ├─package-lock.json
  └─README.md

## vue.config.js配置文件
> 使用vue inspect > output.js 可以产看vue-cli的默认配置。
> 在项目的根目录下创建vue.config.js可以对vue-cli的默认配置做部分更改，详情参考：https://cli.vuejs.org/zh/config/