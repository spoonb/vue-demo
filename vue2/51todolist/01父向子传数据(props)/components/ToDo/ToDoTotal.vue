<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" @click="toggleCheckAll(!completed)" />
      <span>已完成{{ current }}/总计{{ total }}</span>
      <button @click="delToDoAll">删除已完成事项</button>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToDoTotal",
  data() {
    return {
      completed: false,
    };
  },
  props: ["current", "total", "isAll", "toggleCheckAll", "delToDoAll"],
  computed: {
    isChecked: {
      get() {
        return this.isAll && this.completed
      },
      set(value) {
        this.completed = value
      }
    }
  }
};
</script>

<style>
</style>