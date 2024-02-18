<template>
  <div class="student">
    <h2>{{msg}}</h2>
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{_age}}</h3>
    <h3>性别：{{sex}}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Hello World",
    };
  },
  // 第一种写法：只指定需要哪些参数
  // props: ["name", "age", "sex"],
  // 第二种写法：限制参数的类型
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // },
  // 第三种写法：限制类型，且设为必须项或者定义默认值
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      default: "男"
    }
  },
  computed: {
    _age() {
      return this.age + 1
    }
  }
};
</script>

<style>
.student {
  background-color: rgb(100, 170, 198);
}
</style>