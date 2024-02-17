<template>
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "新余一中",
      address: "江西新余",
    };
  },
};
</script>
  
<style>
.school {
  background-color: greenyellow;
}
</style>