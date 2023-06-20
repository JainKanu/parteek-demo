<template>
  <div class="hello">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>BirthDate</th>
          <th>Address</th>
          <th>Gender</th>
          <th>UserName</th>
          <th>Email</th>
          <th>phone Number</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in $store.state.apiData" :key="index">
          <td>
            {{ data.firstName }}
            {{ data.maidenName ? data.maidenName : "" }}
            {{ data.lastName }}
          </td>
          <td>
            {{ data.age }}
          </td>
          <td>
            {{ data.birthDate }}
          </td>
          <td>
            {{ data.address.address }}
          </td>
          <td>
            {{ data.gender }}
          </td>
          <td>
            {{ data.username }}
          </td>
          <td>
            {{ data.email }}
          </td>
          <td>
            {{ data.phone }}
          </td>
          <td>
            {{ data.university }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AboutPage from "./AboutPage";
export default {
  name: "HelloWorld",
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
table,
th,
td,
tr {
  border: 1px solid black;
  margin: auto;
  justify-content: center;
}
th {
  margin-left: 10px;
}
td > div {
  border: "1px solid black";
}
</style>
