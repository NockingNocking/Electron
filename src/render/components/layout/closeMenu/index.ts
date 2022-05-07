import type { App, Plugin } from 'vue'
import type { CloseMenuTypes } from './src/closeMenuTypes'
export type { CloseMenuTypes }
import CloseMenu from './src/CloseMenu'
CloseMenu.install = (app: App): void => {
  app.component(CloseMenu.name, CloseMenu)
}

export default CloseMenu as typeof CloseMenu & Plugin
