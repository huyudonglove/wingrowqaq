import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import environment from '@/components/environment'
import system from '@/components/system/system'
import control from '@/components/system/control'
import store from '@/components/system/store'
import detail from '@/components/flowline/detail'


Vue.use(Router)
//export default new

const router =  new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component:dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/environment',
      name: 'environment',
      component:environment,
      meta: { requiresAuth: true },
      children:[
        {path:'/environment/:id',name:'detail',component:detail}
      ]
    },
    {
      path: '/system',
      name: 'system',
      component:system,
      children:[
        {path:'/system/control',name:'control',component:control},
        {path:'/system/store',name:'store',component:store}
      ],
      meta: { requiresAuth: true }
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
       next()
  }else{
      next()
  }
})

export default router;
