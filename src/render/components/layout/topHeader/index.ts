import type { App, Plugin } from 'vue'
import TopHeader from './src/TopHeader'

TopHeader.install = (app: App): void => {
  app.component(TopHeader.name, TopHeader)
}

export default TopHeader as typeof TopHeader & Plugin
