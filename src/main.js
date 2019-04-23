import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import { routes } from './route'
import { store } from './store/store'

Vue.use(VueRouter);
Vue.prototype.$http = axios;

const router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
