<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>姓名：{{ name }}</h3>
    <h3>地址：{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
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
    address: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  background-color: yellow;
}
</style>