import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/401",
      component: () => import('@/views/error/401.vue'),
      hidden: true
    },
    {
      path: "/404",
      component: () => import('@/views/error/404.vue'),
      hidden: true
    },
    {
      path: "/login",
      component: () => import('@/views/login'),
      hidden: true
    },
    {
      path: "/",
      component: Layout,
      redirect: "dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import('@/views/dashboard'),
          meta: {
            title: "dashboard",
            icon: "dashboard",
            noCache: true
          }
        }
      ]
    }
  ]
})
