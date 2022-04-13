/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 17:30:40
 */
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import "antd/dist/antd.css";
import Store from "./store/store"
import { BrowserRouter }  from "react-router-dom"

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
)
