import { app, Tray, Menu, BrowserWindow } from 'electron'
import { createWindow, createLoading } from './create'
import { options as allWindow } from './options'

const path = require('path')

let appTray: Tray
export function setTray(): Tray {
  if (appTray) return appTray

  const trayMenuTemplate = [
    {
      label: '菜单一',
      click() {
        createWindow(allWindow.menuOne.window, allWindow.menuOne.hash)
      }
    },
    {
      label: '退出',
      click() {
        app.exit(0)
      }
    }
  ]
  // 创建托盘实例
  const iconPath = path.join(__dirname, '../favicon.ico')
  appTray = new Tray(iconPath)

  // 图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate as any)
  appTray.setToolTip('nocking')

  // 设置托盘菜单
  appTray.setContextMenu(contextMenu)
  appTray.on('double-click', () => {
    defaultWindow.show()
  })

  return appTray
}

// 创建默认窗口
let defaultWindow: BrowserWindow
export function createDefaultWindow(): BrowserWindow {
  if (defaultWindow) return defaultWindow
  defaultWindow = createWindow(allWindow.defaultWin.window, allWindow.defaultWin.hash)
  return defaultWindow
}
// 创建loading窗口
let loadingWindow: BrowserWindow
export function createLoadingWindow(): BrowserWindow {
  if (loadingWindow) return loadingWindow
  loadingWindow = createLoading(allWindow.loadingWin.window, allWindow.loadingWin.hash)
  return loadingWindow
}
