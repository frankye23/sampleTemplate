import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import home from '@/views/home/Index.vue'
import dashboard from '@/views/dashboard/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('@/views/market/Index.vue') //lazy load
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router