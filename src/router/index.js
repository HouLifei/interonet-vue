import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Service from '@/pages/Service'
import Create from '@/pages/Create'
import Check from '@/pages/Check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: 'check',
      name: 'check',
      component: Check
    }
  ]
})
