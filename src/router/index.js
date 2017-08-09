import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Heroes from '@/components/Heroes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    }
  ]
})
