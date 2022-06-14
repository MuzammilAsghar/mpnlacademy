<template>
<body v-if="loading">
  <div class="container-scroller">
  <Header />
  <div class="container-fluid page-body-wrapper pt-0">
      <Sidebar />
      <div class="main-panel">
        <div class="content-wrapper">
            <Nuxt />
        </div>
      </div>
    </div>
    </div>
</body>
</template>

<script>
export default{
  data(){
    return{
     loading:false,
    }
  },
  methods:{
    checkLoggedin(){
      let token = localStorage.getItem('authToken');
      if(!token){
        location = '/login';
      }
    },
    hideLoading(){
     setInterval(() => {
        this.loading = true;
      },700)
    }
  },
  beforeMount(){
    this.checkLoggedin();
    this.hideLoading();
  }
}
</script>