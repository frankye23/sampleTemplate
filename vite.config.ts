import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path';
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    vue()
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src') // setting alias
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // port
    cors:true,
    // proxy
    proxy: {
      '/api': {
        target: 'http://8.212.8.124:14042/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})

