import { App } from 'vue'
import Loading from './loading'
import MainLayout from './mainLayout'
import TopHeader from './topHeader'
// 所有组件列表
const components = [Loading, MainLayout, TopHeader]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

export { Loading, MainLayout, TopHeader }

export default {
  install
}
