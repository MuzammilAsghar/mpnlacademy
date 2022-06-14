<template>
<div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="fw-light">Sign in to continue.</h6>
              <form class="pt-3" method="post" @submit.prevent="login">
                <div class="form-group">
                  <input type="email" name="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                </div>
                <div class="form-group">
                  <input type="password" name="password" v-model="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="mt-3">
                  <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                </div>
                <div class="text-center mt-4 fw-light">
                  Don't have an account? <NuxtLink to="/register" class="text-primary">Create</NuxtLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->

</template>

<script>
import axios from 'axios';
import jwt_decode from "jwt-decode"; 
  export default {
    layout: 'login',
    data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
    let data = {
    email: this.email,
    password: this.password
   }

      try{
      const response = await this.$axios.post('login', data);
      const token = await response.data.token;
      var user = jwt_decode(token);
      this.$auth.loginWith("local", {data})
     .then( (response) => {
        localStorage.authToken = token;
        this.$auth.setUser(user);
        this.$route.push('/');
        });
      } catch (e) {
        this.error = e.response
      }
    }}
  }
</script>