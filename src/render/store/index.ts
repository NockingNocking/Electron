import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
// 数据持久化插件
store.use(piniaPluginPersist)

export default store
