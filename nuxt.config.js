export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pnlacademy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:"vendors/feather/feather.css"},
      {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'},
      {rel:'stylesheet', href:"vendors/mdi/css/materialdesignicons.min.css"},
      {rel:'stylesheet', href:"vendors/typicons/typicons.css"},
      {rel:'stylesheet', href:"vendors/simple-line-icons/css/simple-line-icons.css"},
      {rel:'stylesheet', href:"vendors/css/vendor.bundle.base.css"},
      {rel:'stylesheet', href:"vendors/datatables.net-bs4/dataTables.bootstrap4.css"},
      {rel:'stylesheet', href:"js/select.dataTables.min.css"},
      {rel:'stylesheet', href:"css/vertical-layout-light/style.css"},

    ],
    script:[
     {src:"vendors/js/vendor.bundle.base.js"},
     {src:"https://code.jquery.com/jquery-3.2.1.slim.min.js"},
     {src:"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"},
     {src:"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"},
      {src:"vendors/chart.js/Chart.min.js"},
      {src:"vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"},
      {src:"vendors/progressbar.js/progressbar.min.js"},

    ]
  },
  router: {
    middleware: ['authentication']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:5000/api/',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'signin', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
