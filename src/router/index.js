import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import environment from '@/components/environment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component:dashboard
    },
    {
      path: '/environment',
      name: 'environment',
      component:environment
    }
  ]
})
