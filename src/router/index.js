import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('../views/Market.vue'),
    children: [{
      path: ':submenu',
      name: 'opera',
      component: () => import('../components/market/Opera.vue')
    }]
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('../views/Publish.vue'),
    children: [{
      path: 'create',
      name: 'create',
      component: () => import('../components/publish/Create.vue')
    }]
  },
  {
    path: '/statistic-data',
    name: 'statistic-data',
    component: () => import('../views/StatisticData.vue')
  },
  {
    path: '/my-wallet',
    name: 'my-wallet',
    component: () => import('../views/MyWallet.vue'),
  },
  {
    path: '/:target/details/:id',
    name: 'details',
    component: () => import('../views/Details.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
