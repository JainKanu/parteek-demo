<template>
  <div class="home">
    <h1>Student data</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "Jain",
    };
  },
  mounted() {
    this.$store.dispatch("userApiData");
    // this.firstFun("mounted");
  },
  created() {
    // this.firstFun("created");
  },
  methods: {
    secFun() {},
  },
};
</script>
