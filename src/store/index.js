import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use( Vuex );

export default new Vuex.Store( {
  state: {
    apiData: [],
    userDetail: [
      { name: "Parteek", address: 'Patiala', phnNumber: "", email: "" },
    ],
    firstVar: {
      text: 'Don',
      age: '32'
    },
    testNum: 1
  },
  getters: {
    getAge ( state ) {
      return state.firstVar.age
    }
  },
  mutations: {
    setApiData ( state, value ) {
      return state.apiData = value
    }, 
    userData ( state, value ) {
      return state.userDetail.push(value)
    },
    
    incNum ( state, value ) {
      return state.testNum = value
    }
  },
  actions: {
    async userApiData ( context ) {
      await axios.get( "https://dummyjson.com/users" ).then( ( response ) => {
        // this.apiData = response.data.users;
        context.commit( 'setApiData', response.data.users );
      } );
    },
    setUserData ( context, value ) {
      context.commit( 'userData', value );
    },
  },
  modules: {},
} );
