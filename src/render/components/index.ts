import type { App } from 'vue'
import TopHeader from './layout/topHeader'
import CloseMenu from './layout/closeMenu'

// 所有组件列表
const components = [TopHeader, CloseMenu]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.forEach((component) => {
    if (component.install) {
      app.use(component)
    }
  })
}

export { TopHeader, CloseMenu }

export default {
  install
}
