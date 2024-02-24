<template>
  <div>
    <ToDoAppend :addToDoRecord="addToDoRecord" />
    <ToDoList :todos="todos" :toggleCheck="toggleCheck" :delToDo="delToDo" />
    <ToDoTotal
      v-show="total"
      :current="current"
      :total="total"
      :isAll="isAll"
      :toggleCheckAll="toggleCheckAll"
      :delToDoAll="delToDoAll"
    />
  </div>
</template>

<script>
import ToDoAppend from "./components/ToDo/ToDoAppend";
import ToDoList from "./components/ToDo/ToDoList";
import ToDoTotal from "./components/ToDo/ToDoTotal";
import { nanoid } from "nanoid";

export default {
  name: "App",
  components: {
    ToDoAppend,
    ToDoList,
    ToDoTotal
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };
  },
  methods: {
    addToDoRecord(value) {
      if (!value.trim()) return;
      this.todos.unshift({ id: nanoid(), title: value, completed: false });
    },
    toggleCheck(id) {
      this.todos.forEach(e => {
        if (e.id === id) {
          e.completed = !e.completed;
          return;
        }
      });
    },
    delToDo(id) {
      this.todos = this.todos.filter(e => e.id !== id);
    },
    toggleCheckAll(value) {
      this.todos.forEach(e => (e.completed = value));
    },
    delToDoAll() {
      this.todos = this.todos.filter(e => !e.completed);
    }
  },
  computed: {
    total() {
      return this.todos.length;
    },
    current() {
      // pre: 前一次的迭代值, current: 迭代的当前元素
      return this.todos.reduce((pre, current) => {
        if (current.completed) return pre + 1;
        return pre;
      }, 0);
    },
    isAll() {
      return this.total && this.current === this.total;
    }
  },
  watch: {
    todos: {
      handler(newValue) {
        localStorage.setItem("todos", JSON.stringify(newValue));
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
