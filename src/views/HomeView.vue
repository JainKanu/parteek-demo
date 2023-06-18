<template>
  <div class="home">
    <input v-model="msg" />
    <h1>{{ msg }}</h1>
    <HelloWorld :apiData="apiData" />
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      apiData: [],
      msg: "Jain",
    };
  },
  mounted() {
    // this.firstFun("mounted");
  },
  created() {
    this.firstFun("created");
  },
  methods: {
    async firstFun() {
      // console.log("calledFrom", calledFrom);
      await axios.get("https://dummyjson.com/users").then((response) => {
        this.apiData = response.data.users;
      });
      console.log("this.apiData", this.apiData);
    },
    secFun() {},
  },
};
</script>
