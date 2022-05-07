require('dotenv').config({ path: join(__dirname, '.env') })

import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig((env: any) => {
  return {
    plugins: [vue(), vueJsx({})],
    root: join(__dirname, 'src/render'),
    base: './',
    server: {
      port: +process.env.PORT
    },
    resolve: {
      alias: {
        '@root': __dirname,
        '@': join(__dirname, 'src/render')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 不能在这里引入 没效果，直接去main.ts里面引入全局文件
          // additionalData: "@use '@/style/index.scss';"
        }
      }
    },
    build: {
      outDir: join(__dirname, 'dist/render'),
      emptyOutDir: true,
      minify: false,
      commonjsOptions: {},
      sourcemap: true
    }
  }
})
