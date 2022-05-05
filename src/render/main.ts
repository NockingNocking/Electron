import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import components from '@/render/components/layout'

import 'ant-design-vue/dist/antd.css'
import './index.css'

createApp(App).use(router).use(store).use(Antd).use(components).mount('#app')
