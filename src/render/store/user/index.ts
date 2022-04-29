import { defineStore } from 'pinia'

interface testPinia {
  age: number
  name: string
  sex: string
}

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: (): testPinia => {
    return {
      name: '张三',
      age: 18,
      sex: '男'
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userInfo', // 本地存储的键名
        storage: localStorage, // 本地存储方式
        paths: ['name', 'age'] // 需要存储的内容(默认全部存储)
      }
    ]
  }
})
