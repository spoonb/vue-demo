import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 将vm设置为事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
