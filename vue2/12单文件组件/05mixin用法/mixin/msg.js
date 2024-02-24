export default {
  data() {
    return {
      msg: "Hello " + this.name,
    };
  },
  methods: {
    showMSG() {
      console.log("msg", this.msg)
    }
  },
  mounted() {
    console.log("msg mounted", this.msg)
  }
}