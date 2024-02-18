# 笔记

## 脚手架分析

### vue-cli文件结构
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



### vue.config.js配置文件

> 使用vue inspect > output.js 可以产看vue-cli的默认配置。
> 在项目的根目录下创建vue.config.js可以对vue-cli的默认配置做部分更改，详情参考：https://cli.vuejs.org/zh/config/



## ref属性

1. 用来收集元素的DOM信息，替代id且不需要使用传统的DOM操作
2. 应用在HTML原生元素中时获取的是真实DOM元素;应用在组件标签时获取的是组件对象
3. 使用方式
    标记信息收集：<h1 ref="xxx"></h1> 或 <School ref="xxx"></School>
    获取元素信息：this.$refs.xxx



## props配置项

- 功能：允许父组件给子组件传递数据，该数据可以被用于展示等各种功能
  - 数据传递：
    
    ```
    <demo name="xxx" />
    ```
    
    
  - 数据接收：
    - 第一种方式(指定需要接收的参数)
      ```
      props: ["name"]
      ```
      
      
    - 第二种方式(第一种的基础上，额外指定参数类型)
      ```
      props: {
      	name: String 
      }
      ```
      
      
    - 第三种方式(第二种的基础上，额外指定必须项或默认值)
      
      ```
      props: {
        name: {
          type: String,
          required: true
        },
        sex: {
          type: String,
          default: "男"
        }
      }
      ```
      
      
  - 备注：
    > props是只读的，不可修改。



## mixin配置项

- 功能：将多个组件共用的配置模块化(通用模块，各个组件引入使用)
  - 使用方法：
    - 定义mixin对象：
      ```
      {
        data() {...},
        methods: {...},
        ...
      }
      ```
      
      
    - 引入混入对象：
      - 局部mixin：`mixins: ["xxx"]`
      - 全局mixin：`Vue.mixin(xxx)`
  - 备注
    > mixin中的配置和当前组件冲突时，以当前组件准，换言之就是当前组件覆盖mixin;但是有一个特例，那就是生命周期钩子函数，mixin引入的钩子和当前组件定义的钩子都会被执行，且先执行mixin引入的钩子，可以类比java的父类子类构造函数的执行顺序



## Vue插件

- 功能：用于全局增强Vue以及Vue的组件。

- 本质：包含`install`函数的一个对象，`install`的第一个参数是Vue的构造函数，之后的所有参数是使用者传入的数据。

- 使用方法：

  - 定义插件：

    ```js
    export default {
    	install() {
    		// 全局过滤器
    		Vue.filter(...)
    		// 全局自定义指令
        Vue.directive(...)
    		// 全局混入
        vue.mixin(...)
    		// 给Vue原型上添加一个方法
        Vue.prototype.xxx = () => {...}
    		// ...
    	}
    }
    ```

  - 使用插件：`Vue.use(...)`

  

