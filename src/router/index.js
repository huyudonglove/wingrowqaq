import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import environment from '@/components/environment'
import system from '@/components/system/system'
import control from '@/components/system/control'
import store from '@/components/system/store'
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
    },
    {
      path: '/system',
      name: 'system',
      component:system,
      children:[
        {path:'/system/control',name:'control',component:control},
        {path:'/system/store',name:'store',component:store}
      ]
    }
  ]
})
