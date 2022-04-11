/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 15:24:57
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    proxy: {
     "/api": {
       target: "http://localhost:3000",
       changeOrigin: true
      }
     }
  },
  plugins: [react()]
})
