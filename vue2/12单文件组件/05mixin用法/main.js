import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

Vue.mixin({
  mounted() {
    console.log("mixin", this)
  }
})

new Vue({
  el: "#app",
  render: h => h(App)
})