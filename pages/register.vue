<template>
<div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="fw-light">Signup to register.</h6>
              <form class="pt-3" method="post" @submit.prevent="register">
              <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" 
                  v-model="firstName" name="firstName" placeholder="First Name">
                </div>
              <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" 
                  v-model="lastName" name="lastName" placeholder="Last Name">
                </div>  
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                  name="email" v-model="email" placeholder="Email">
                </div>

                <div class="form-group">
                  <input type="tel" class="form-control form-control-lg" id="phone" 
                  name="phone" v-model="phone" placeholder="Phone">
                </div>

                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" 
                  name="fatherName" v-model="fatherName" placeholder="Father name">
                </div>

                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" 
                  name="className" v-model="className" placeholder="Class">
                </div>

                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" 
                  name="password" v-model="password" placeholder="Password">
                </div>

                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputPassword1" 
                  name="rollNo" v-model="rollNo" placeholder="Roll No">
                </div>

                <div class="mt-3">
                  <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN Up</button>
                </div>
                <!-- <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div> -->
                <div class="text-center mt-4 fw-light">
                  Already have an account? <NuxtLink to="/login" class="text-primary">Signin</NuxtLink>
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
  export default {
    data() {
    return {
      firstName: '',
      lastName:'',
      email: '',
      password: '',
      phone:'',
      fatherName:'',
      className:'',
      rollNo:'',
      error: null
    }
  },
  methods: {
    async register() {
      
      try {
       const response = await axios.post('http://localhost:5000/api/siginup', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          contactNumber:this.phone,
          fatherName:this.fatherName,
          className:this.className,
          rollNumber:this.rollNo,
          password: this.password
        })
      const user = await response.data.user;
      console.log(response);
       if(user){
        this.$auth.setUser(user);
        this.$auth.$storage.setUniversal('user', user, true)
        .then(() => this.$toast.success('User set!'))
       }
  
        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          },
        })

       
      } catch (e) {
        this.error = e.response
      }
    }
  },
    layout: 'register'
    // page component definitions
  }
</script>