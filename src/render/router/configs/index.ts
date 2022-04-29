import { RouteRecordRaw } from 'vue-router'

const configRoutes: Array<RouteRecordRaw> = [
  {
    path: '/loadingWin',
    name: 'loadingWin',
    component: () => import('@/views/Loading.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/defaultWin',
    name: 'defaultWin',
    component: () => import('@/views/DefaultWin.vue')
  },
  {
    path: '/menuOne',
    name: 'menuOne',
    component: () => import('@/views/MenuOne.vue')
  }
]

export default configRoutes
