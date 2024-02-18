<template>
  <div>
    <ToDoSearchAppend/>
    <ToDoList/>
    <ToDoTotal/>
  </div>
</template>

<script>
import ToDoSearchAppend from "./components/ToDo/ToDoSearchAppend";
import ToDoList from "./components/ToDo/ToDoList";
import ToDoTotal from "./components/ToDo/ToDoTotal";

export default {
  name: "App",
  components: {
    ToDoList,
    ToDoSearchAppend,
    ToDoTotal,
  },
  mounted() {
    console.log(this)
  }
};
</script>

<style>
</style>
