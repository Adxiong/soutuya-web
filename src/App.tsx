/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-06 23:28:13
 */
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

import Header from './components/header'

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Router></Router>
      </div>
    </BrowserRouter>
    
  )
}

export default App
