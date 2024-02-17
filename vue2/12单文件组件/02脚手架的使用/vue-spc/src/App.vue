<template>
  <div class="app">
    <!-- <Hello></Hello> -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  components: {
    School,
    Student,
  },
};
</script>

<style>
.app {
  background-color: skyblue;
}
</style>