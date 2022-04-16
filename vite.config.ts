/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-16 03:07:46
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    proxy: {
     "/api": {
       target: "http://0.0.0.0:3000",
       changeOrigin: false
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
