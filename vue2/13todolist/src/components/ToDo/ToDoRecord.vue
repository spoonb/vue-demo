<template>
  <li>
    <label>
      <input type="checkbox"/>
      <span>{{context}}</span>
    </label>
    <button @click="del">刪除</button>
  </li>
</template>

<script>
export default {
  name: "ToDoRecord",
  props: {
    context: {
      type: String,
    },
  },
  methods: {
    del() {

    }
  }
};
</script>

<style>
</style>