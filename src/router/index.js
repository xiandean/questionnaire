import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Share from '@/pages/Share'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/share/:questions/:answers',
      name: 'share',
      component: Share
    }
  ]
})
