<template>
  <div>
    <input type="text" v-model="value"
     @keyup.shift.enter.stop="addToDoRecord" />
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
  methods: {
    addToDoRecord() {},
  },
};
</script>

<style>
</style>