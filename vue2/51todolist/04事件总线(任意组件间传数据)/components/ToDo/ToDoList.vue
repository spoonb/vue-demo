<template>
  <ul>
    <ToDoRecord
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import ToDoRecord from "./ToDoRecord";

export default {
  name: "ToDoList",
  components: {
    ToDoRecord,
  },
  props: ["todos"],
};
</script>

<style>
ul {
  padding-left: 0px;
}
</style>