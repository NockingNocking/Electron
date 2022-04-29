import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import configRoutes from './configs'

const routes: Array<RouteRecordRaw> = [...configRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
