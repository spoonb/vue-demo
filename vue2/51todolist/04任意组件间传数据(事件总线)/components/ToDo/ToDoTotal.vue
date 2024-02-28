<template>
  <div>
    <label>
      <input type="checkbox" v-model="completed" />
      <span>已完成{{ current }}/总计{{ total }}</span>
      <button @click="delToDoAll">删除已完成事项</button>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToDoTotal",
  props: ["current", "total", "isAll"],
  computed: {
    completed: {
      get() {
        return this.isAll
      },
      set(value) {
        this.toggleCheckAll(value)
      }
    }
  },
  methods: {
    toggleCheckAll(value) {
      this.$emit("toggleCheckAll", value)
    },
    delToDoAll() {
      this.$emit("delToDoAll")
    }
  }
};
</script>

<style>
</style>