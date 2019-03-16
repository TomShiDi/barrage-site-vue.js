import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Practice from '@/components/Barrage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/practice',
      component: Practice
    }
  ]
})
