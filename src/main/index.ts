import { setTray, createDefaultWindow, createLoadingWindow } from './window'
import { app, Menu, ipcMain } from 'electron'

// 关闭菜单栏
Menu.setApplicationMenu(null)

// 应用程序单开模式
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) app.quit()

app.whenReady().then(() => {
  const defaultWindow = createDefaultWindow() // 创建默认窗口
  const loadingWindow = createLoadingWindow() // 创建加载窗口
  // 监听渲染进程崩溃或被杀死，重新运行程序
  defaultWindow.webContents.on('render-process-gone', () => {
    app.relaunch()
    app.exit(0)
  })

  // 监听主窗口的关闭事件
  defaultWindow.on('close', (event) => {
    event.preventDefault()
    defaultWindow.hide()
  })
  // 右上角关闭主窗口事件
  ipcMain.on('close-main-window', (event, arg) => {})

  // 监听主窗口加载完成，取消loading窗口，显示主窗口，显示托盘菜单
  ipcMain.on('main-window-created', (event, arg) => {
    if (arg) {
      setTimeout(() => {
        loadingWindow.close()
        defaultWindow.show()
        setTray()
      }, 3000)
    }
  })
})

// 所有窗口关闭，移除所有监听器，程序不退出
app.on('window-all-closed', () => {
  ipcMain.removeAllListeners()
})
