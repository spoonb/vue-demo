<template>
  <div class="demo">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
  export default {
    name: "school",
    data() {
      return {
        name: "新余一中",
        address: "江西新余",
      };
    },
  };
  </script>
  
<style>
  .demo{
    background-color: skyblue;
  }
</style>