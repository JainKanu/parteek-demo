<template>
  <div class="hello">
    <table>
    <tr>
      <th>
        Name
      </th>
      <th>
        Age
      </th>
      <th>
        BirthDate
      </th>
      <th>
        Address
      </th>
      <th>
        Gender
      </th>
      <th>
        UserName
      </th>
      <th>
        Email
      </th>
      <th>
        phone Number
      </th>
      <th>
        University
      </th>


    </tr>
    <tr>
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.firstName }}
      {{ data.maidenName ? data.maidenName : "" }}
      {{ data.lastName }}
  
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.age}}
    
    </div>
     
     </td> 
     
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.birthDate }}
     
  
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.address.address }}
     
    
  
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.gender}}
 
  
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.username }}
  
  
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.email }}
    
   
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.phone }}
     
    </div>
     
     </td> 
     <td>
      <div v-for="(data, index) in apiData" :key="index">
      {{ data.university }}
     
    </div>
     
     </td> 
    </tr>
   </table>
  
  </div>
</template>

<script>
import AboutPage from "./AboutPage"
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
table,th,td,tr{
  border:1px solid black;
  margin: auto;
  justify-content: center;
}
th{
  margin-left: 10px;
}
td>div{
  border:"1px solid black"
}
</style>
