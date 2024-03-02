<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @click="toggleCheck(todo.id)" />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit" type="text" v-model="todo.title" @blur="editDone(todo.id)" ref="inputTitle" />
    </label>
    <button @click="editToDo(todo.id)">编辑</button>
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
    },
    editToDo(id) {
      this.$bus.$emit("editToDo", id)
      this.$nextTick(() => {
        this.$refs.inputTitle.focus()
      })
    },
    editDone(id) {
      this.$bus.$emit("editDone", id)
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>