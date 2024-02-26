<template>
  <div>
    <input type="text" v-model="value"
     @keyup.enter.stop="addToDoRecord" />
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
    addToDoRecord() {
      this.$emit("addToDoRecord", this.value)
    }
  }
};
</script>

<style>
</style>