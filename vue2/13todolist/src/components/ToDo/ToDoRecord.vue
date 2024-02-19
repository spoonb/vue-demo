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
  props: ["todo", "toggleCheck", "delToDo"],
};
</script>

<style>
li {
  list-style: none;
}
</style>