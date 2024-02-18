<template>
  <div class="school">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "欢迎来到学院！",
    };
  },
};
</script>

<style>
.school {
  background-color: aquamarine;
}
</style>