import { app, BrowserWindow } from 'electron'

const path = require('path')

// 取消右键上下文菜单
function preventDragbarContext(win: BrowserWindow) {
  const WM_INITMENU = 0x116
  win.hookWindowMessage(WM_INITMENU, (e) => {
    win.setEnabled(false)
    setTimeout(() => {
      win.setEnabled(true)
    }, 100)
    return true
  })
}

// 创建loading窗口
export function createLoading(
  options: Electron.BrowserWindowConstructorOptions,
  hash: string
): BrowserWindow {
  const loadingWin = new BrowserWindow({
    ...options,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    }
  })

  preventDragbarContext(loadingWin)

  if (app.isPackaged) {
    loadingWin.loadFile(path.join(__dirname, '../render/index.html'), {
      hash
    })
  } else {
    loadingWin.loadURL(`http://localhost:${process.env.PORT}/#${hash}`)
  }

  return loadingWin
}

// 创建窗口
export function createWindow(
  options: Electron.BrowserWindowConstructorOptions,
  hash: string
): BrowserWindow {
  const win = new BrowserWindow({
    ...options,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    }
  })

  preventDragbarContext(win)

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../render/index.html'), {
      hash
    })
  } else {
    win.webContents.openDevTools()
    win.loadURL(`http://localhost:${process.env.PORT}/#${hash}`)
  }

  return win
}
