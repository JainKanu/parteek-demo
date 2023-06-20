<template>



<diV>
    
    <h1>About Page</h1>
    <div class="about">
    <h1>Form Section</h1>
    
    <div id="form">
        <p>Input Text Form</p>
        <input v-model="msg" placeholder="Enter your text" type="text"/>
     <h1>{{msg }}</h1>
     </diV>
    <div id="form">
        <p>Input Text Area Form</p>
    <textarea v-model="msg2" placeholder="add multiple lines" type="text"></textarea>
    <h1>{{msg2}}</h1>
    </div>
    <div id="form">
        <p>Input Number Form</p>
    <input v-model="msg3" placeholder="Enter your mobile number" type="number"/>
        <h1>{{msg3 }}</h1>
     </div>
     <div id="form">
        <p>Input Email Form</p>
      <input v-model="msg4" placeholder="Enter your email id" type="email"/>
        <h1>{{msg4 }}</h1>
     </div>
     <div id="form">
        <p>Input Checkbox Form</p>
    
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    
     
    </div>
           

    
   
    
  
  
</div>

</div>
    

   

</template>
<script>
import AboutView from "../views/AboutView.vue"
export default{
    components: AboutView,
    data() {
        return {
            apiData: [],
            msg: "",
            msg2: "",
            msg3: "",
            msg4: "",
            msg5: "",
        };
    },
    components: { AboutView }
}
</script>
<style>
#form{
    display: flex;
    justify-content: center;
}
p,input,h1{
    margin: 10px;

}
.about{
    border: 1px solid black;
    margin: auto;
    width: 40%;
}
</style>