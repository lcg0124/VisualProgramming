import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/edit',
      name: 'Edit',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
