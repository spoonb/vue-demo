<template>
  <ul>
    <ToDoRecord
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :toggleCheck="toggleCheck"
      :delToDo="delToDo"
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
  props: ["todos", "toggleCheck", "delToDo"],
};
</script>

<style>
ul {
  padding-left: 0px;
}
</style>