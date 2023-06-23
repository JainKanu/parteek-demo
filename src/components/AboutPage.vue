<template>



<diV>
    
    <h1>About Page</h1>
    <form>
        <label for="name">Enter your Name</label>
        <input placeholder="Enter your name"  id="name" type="text" v-model="form.name"/>
        <br/>
        <label for="address">Enter your address</label>
        <input placeholder="Enter your address"  id="address" type="text" v-model="form.address"/>
        <br/>
        <label for="phoneno">Enter your PhoneNo.</label>
        <input placeholder="Enter your PhoneNo."  id="number" type="number" v-model="form.phnNumber"/>
        <br/>
        <label for="email">Enter your Email id</label>
        <input placeholder="Enter your emailid"  id="emailid" type="email" v-model="form.email"/>
        <br/>
        <button v-on:click="login()" type="button">Submit</button>
    </form>


</div>
    

   

</template>
<script>

import AboutView from "../views/AboutView.vue"
export default{
    components: AboutView,
    data() {
        return {
            apiData: [],
          form :{
            name: "",
            address: "",
            phnNumbe: "",
            email: "",
          }
          
        };
    },
    methods:{
        login(){
        
           this.$store.dispatch("setUserData",this.form);
           
            
        }
    }
   
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