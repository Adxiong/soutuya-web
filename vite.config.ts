/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-14 14:51:12
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

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
  resolve: {
    alias: [
      {
        find: "@", replacement: path.resolve("./", "src")
      }
    ]
  },
  plugins: [react()]
})
