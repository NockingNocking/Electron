import { App } from 'vue'
import MainLayout from './src/MainLayout.vue'

MainLayout.install = (app: App): void => {
  app.component(MainLayout.name, MainLayout)
}

export default MainLayout
