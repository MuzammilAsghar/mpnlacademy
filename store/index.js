import axios from 'axios';
import jwt_decode from "jwt-decode"; 

export const state = () => ({
    users: [ ],
    user:{},
    loggedIn:false,
  })
  
  export const mutations = {
    SET_USERS(state, users) {
      state.users = users
  },
  SET_LOGGED_IN_USER(state, user) {
    state.user = user
    state.loggedIn = true
  },
  SET_CURRENT_USER(state, user){
    state.user = user
    state.loggedIn = true
  },
  LOGOUT_USER(state,status){
    state.loggedIn=status
  }
  }

  export const getters = {
    getUsers: (state) => state.users,
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
    isLoggedIn(state) {
      return state.loggedIn
    },
    currentUser : (state) =>  state.user
  }

  export const actions =  {
    async fetchUsers({ commit }) {
        try {
          const data = await axios.get('http://localhost:5000/api/users')
            commit('SET_USERS', data.data)
          }
          catch (error) {
              alert(error)
              console.log(error)
          }
      },
    currentUser({commit},user){
      try{
        commit('SET_LOGGED_IN_USER',user)
      }catch(er){
        console.log(er)
      }
    },
   setCurrentUser({commit}){
      try {

        var authToken = window.localStorage.authToken;
        var user = jwt_decode(authToken);
        if(user){
          
           commit('SET_CURRENT_USER',user)
        }else{
          this.$route.push('/login');
        }
       }catch(error){
        console.log(error)
       }
  }
  ,logoutUser({commit}){
    commit('LOGOUT_USER',false)
  }
}
