import { App } from 'vue'
import TopHeader from './src/TopHeader.vue'

TopHeader.install = (app: App): void => {
  app.component(TopHeader.name, TopHeader)
}

export default TopHeader
