<template>
  <!-- 同样必须保证template下有且仅有一个根元素，通常使用div包裹 -->
  <div>
    <h1 ref="title">{{msg}}</h1>
    <School ref="school"></School>
    <button @click="showDOM">点我获取所有ref的DOM</button>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {School},
  data() {
    return {
      msg: "欢迎学习vue2！",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs)
    }
  }
};
</script>