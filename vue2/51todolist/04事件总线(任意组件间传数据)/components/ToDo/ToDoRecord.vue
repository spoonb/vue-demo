<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @click="toggleCheck(todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
    <button @click="delToDo(todo.id)">刪除</button>
  </li>
</template>

<script>
export default {
  name: "ToDoRecord",
  props: ["todo"],
  methods: {
    toggleCheck(id) {
      this.$bus.$emit("toggleCheck", id)
    },
    delToDo(id) {
      this.$bus.$emit("delToDo", id)
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>