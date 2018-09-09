import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/Commen/User/User'
import Technology from '@/components/Commen/Technology/Technology'
import Experience from '@/components/Commen/Experience/Experience'
import Works from '@/components/Commen/Works/Works'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    }
  ]
})
