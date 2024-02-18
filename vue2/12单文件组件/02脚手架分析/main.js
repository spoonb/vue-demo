import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * 当前文件的名称不可以更改，必须未main.js
 * 因为vue所认定的程序入口有且仅有main.js，以下为vue配置的一部分
 *  entry: {
 *    app: [
 *      './src/main.js'
 *    ]
 *  }
 */

/*
  使用template会报错，原因是引入的vue.js为vue.runtime.js
  其中的template解析器被移除，为了使得webpack打包后的js文件
  尽可能的小，所以只保留的vue的核心模块(包括生命周期等)
*/
// Vue.component("Hello", {
//   name: "Hello",
//   template: `
//     <div>
//       <h3>hello vue</h3>
//     </div>
//   `
// })

new Vue({
  // 将App组件放入容器中
  render: h => h(App),

  /*
    render函数要求传入一个createElement函数，
    该函数可以接受两套参数
    1. html原生标签名，标签innerText值
    2. 组件名

    上述写法是render的箭头函数简写
  */
  // render(createElement) {
  //   return createElement(App)
  // }
}).$mount('#app')
