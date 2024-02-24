<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Welcome " + this.name,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  background-color: red;
}
</style>