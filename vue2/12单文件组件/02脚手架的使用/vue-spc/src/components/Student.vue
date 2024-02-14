<template>
  <div class="demo">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
  </div>
</template>

<script>
  export default {
    name: "school",
    data() {
      return {
        name: "新余一中",
        age: 19,
      };
    },
  };
</script>
  
<style>
  .demo{
    background-color: rgb(42, 42, 73);
  }
</style>