<template>
  <div class="hello">
    <div v-for="(data, index) in apiData" :key="index">
      {{ data.firstName }}
      {{ data.maidenName ? data.maidenName : "" }}
      {{ data.lastName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    apiData: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
