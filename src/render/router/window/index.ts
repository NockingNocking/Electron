import { RouteRecordRaw } from 'vue-router'

const configRoutes: Array<RouteRecordRaw> = [
  {
    path: '/defaultWin',
    name: 'defaultWin',
    component: () => import('@/views/window/DefaultWin.vue'),
    redirect: '/defaultWin/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/window/pages/index.vue')
      }
    ]
  },
  {
    path: '/menuOne',
    name: 'menuOne',
    component: () => import('@/views/MenuOne.vue')
  }
]

export default configRoutes
