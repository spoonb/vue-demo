<template>
  <ul>
    <ToDoRecord v-for="(ctx, idx) in contexts" :key="idx" :context="ctx" />
  </ul>
</template>

<script>
import ToDoRecord from "./ToDoRecord";

export default {
  name: "ToDoList",
  components: {
    ToDoRecord,
  },
  data() {
    return {
      contexts: ["a", "b"],
      // contexts: {
      //   type: Array,
      // }
    };
  },
  props: {
    context: {
      type: String,
    },
  },
};
</script>

<style>
</style>