<template>
  <div id="app">
    <button @click="getStudent">获取学生信息</button>
    <button @click="getSchool">获取学校信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudent() {
      axios
        .get("http://localhost:8080/api/student")
        .then((res) => {
          console.log("student =>", res.data);
        })
        .catch((err) => {
          console.log("AJAX请求异常 =>", err.data);
        });
    },
    getSchool() {
      axios
        .get("http://localhost:8080/api/school")
        .then((res) => {
          console.log("school =>", res.data);
        })
        .catch((err) => {
          console.log("AJAX请求异常 =>", err.data);
        });
    },
  },
};
</script>