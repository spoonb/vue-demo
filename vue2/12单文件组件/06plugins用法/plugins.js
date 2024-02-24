export default {
  install(Vue) {
    // 全局过滤器
    Vue.filter("to4DigitsGlobal", function (val) {
      return val.substring(0, 4)
    })

    // 全局自定义指令
    Vue.directive(`v-test`, {
      // 指令与元素绑定成功时
      bind(el, binding) {
        el.value = binding.value * 20
      },
      // 元素被渲染到页面时
      inserted(el) {
        el.focus()
      },
      // 指令所在模版被重新解析时
      update(el, binding) {
        el.value = binding.value * 20
        el.focus()
      }
    })

    // 全局混入
    Vue.mixin({
      data() {
        return {
          msg: "Hello " + this.name,
        };
      },
      methods: {
        showMSG() {
          console.log("msg", this.msg)
        }
      },
      mounted() {
        console.log("msg mounted", this.msg)
      }
    })

    // 给Vue原型上增加一个demo函数，这样各个组件的实例都可以使用这个函数了
    Vue.prototype.demo = () => console.log("demo")
  }
}