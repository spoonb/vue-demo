<template>
  <div class="student" @click="showMSG">
    <h2>{{ msg }}</h2>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
  </div>
</template>

<script>
import msg from "../mixin/msg.js";

export default {
  name: "Student",
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  mixins: [msg],
  mounted() {
    console.log("Student mounted", this.msg);
  },
};
</script>

<style>
.student {
  background-color: rgb(100, 170, 198);
}
</style>