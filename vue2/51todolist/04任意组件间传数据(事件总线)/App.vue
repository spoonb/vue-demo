<template>
  <div>
    <ToDoAppend @addToDoRecord="addToDoRecord" />
    <ToDoList :todos="todos" />
    <ToDoTotal v-show="total" :current="current" :total="total" :isAll="isAll" ref="ToDoTotal" />
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
    toggleCheckAll(value) {
      this.todos.forEach(e => (e.completed = value));
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
  },
  mounted() {
    // 通过事件总线实现各个组件间交互和数据传递
    this.$bus.$on("toggleCheck", (id) => {
      this.todos.forEach(e => {
        if (e.id === id) {
          e.completed = !e.completed;
          return;
        }
      });
    });
    this.$bus.$on("delToDo", (id) => {
      this.todos = this.todos.filter(e => e.id !== id);
    });
    // 组件上绑定自定义事件
    this.$refs.ToDoTotal.$on("toggleCheckAll", this.toggleCheckAll);
    this.$refs.ToDoTotal.$on("delToDoAll", () => {
      this.todos = this.todos.filter(e => !e.completed);
    });
  },
  beforeDestroy() {
    // 卸载事件总线上绑定的自定义事件
    this.$bus.$off("toggleCheck");
    this.$bus.$off("delToDo");
  }
};
</script>

<style>
</style>
