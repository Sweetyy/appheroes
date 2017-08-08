// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/Hello.vue'),
    name: 'root'
  },
  {
    path: '/listofheroes',
    component: require('./components/Listofheroes.vue'),
    name: 'listofheroes'
  },
  {
    path: '/hero/:id',
    component: require('./components/Hero.vue')
  },
  {
    path: '*',
    redirect: '/'
  }]
})

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
