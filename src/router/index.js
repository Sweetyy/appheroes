import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Heroes from '@/components/Heroes'
import Hero from '@/components/Hero'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/heroes/:heroName',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
