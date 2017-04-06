import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/about'
import Modal from '@/components/modal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/modal',
      name: 'Modal',
      component: Modal
    }
  ]
})
