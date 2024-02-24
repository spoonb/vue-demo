<template>
  <div>
    <input type="text" v-model="value"
     @keyup.enter.stop="addToDoRecord(value)" />
  </div>
</template>

<script>
export default {
  name: "ToDoSearchAppend",
  data() {
    return {
      value: "",
    };
  },
  props: ["addToDoRecord"],
};
</script>

<style>
</style>