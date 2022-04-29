import fs from 'fs'
import path from 'path'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('fs', fs)

contextBridge.exposeInMainWorld('path', path)

contextBridge.exposeInMainWorld('process_execPath', process.execPath)

contextBridge.exposeInMainWorld('ipcRenderer', {
  ...ipcRenderer,
  on: (channel: any, callback: any) => {
    ipcRenderer.on(channel, callback)
  }
})
