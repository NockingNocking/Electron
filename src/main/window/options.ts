import { allWindowType } from '../types'

export const options: allWindowType = {
  defaultWin: {
    window: {
      width: 1920,
      height: 1080,
      resizable: true,
      show: false,
      alwaysOnTop: false,
      useContentSize: true,
      frame: false,
      backgroundColor: '#fff',
      icon: 'dist/favicon.ico'
    },
    hash: '/defaultWin'
  },
  loadingWin: {
    window: {
      width: 500,
      height: 400,
      resizable: true,
      show: true,
      alwaysOnTop: false,
      useContentSize: true,
      frame: false,
      backgroundColor: '#fff',
      icon: 'dist/favicon.ico'
    },
    hash: '/loadingWin'
  },
  menuOne: {
    window: {
      width: 400,
      height: 250,
      resizable: false,
      center: true,
      useContentSize: true,
      backgroundColor: '#fff',
      title: 'θεδΈ',
      icon: 'dist/favicon.ico',
      maximizable: false,
      frame: false,
      skipTaskbar: false
    },
    hash: '/menuOne'
  }
}
