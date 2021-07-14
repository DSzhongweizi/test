import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
      'cp': resolve(__dirname, "src/components"),
      'views': resolve(__dirname, "src/views"),
      'img': resolve(__dirname, "src/assets/img"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/common.scss";`
      }
    }
  },
  optimizeDeps: {
    include: ['echarts']
  }
})
