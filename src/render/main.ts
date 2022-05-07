import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './index.css'
import './style/index.scss'
import customCom from './components'

createApp(App).use(router).use(store).use(Antd).use(customCom).mount('#app')
