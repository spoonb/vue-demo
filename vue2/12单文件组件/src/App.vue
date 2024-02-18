<template>
  <!-- 同样必须保证template下有且仅有一个根元素，通常使用div包裹 -->
  <div>
    <h1>{{msg}}</h1>
    <!-- <Student name="张三" age="18" sex="男" /> -->
    <!-- <Student name="李四" age="19" sex="女" /> -->
    <!-- 
      :age相对于age来说有一个特点
      ""中的value实际是表达式执行后的结果，而单纯的age将value当做字符串
      这个特点来源于v-bind，其实所有vue的指令都有这个特点
    -->
    <Student name="张三" :age="18" />
    <Student name="李四" :age="19" sex="女" />
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  components: {Student},
  data() {
    return {
      msg: "欢迎学习vue2！",
    };
  },
};
</script>