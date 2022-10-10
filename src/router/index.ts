import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
const Layout = () => import('../views/layout/Layout.vue')
import home from '@/views/home/Index.vue'
import dashboard from '@/views/dashboard/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    children: [
      {
        path: '/',
        component: home,
        name: 'Home',
        meta: {
          title: 'Home',
        },
      },
      {
        path: '/market',
        name: 'market',
        component: () => import('@/views/market/Index.vue') //lazy load
      }
    ]
  },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: dashboard
  // },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router