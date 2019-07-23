// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import { Header } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import router from './router'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/lib/mui/css/mui.min.css'
Vue.component(Header.name, Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App)
  // router
})
