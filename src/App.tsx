/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 18:02:23
 */
import { useContext, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router,  useRoutes } from 'react-router-dom'
import router from './router'

import Header from './components/header'
import Store, { StoreContext } from './store/store'
import UserServer from "./service/user"

const AppRoutes = () => {
  return  useRoutes(router)
}

function App() {

  const {store, dispatch  } = useContext(StoreContext)
  
  useEffect( () => {
    console.log(111);

    UserServer.getCurrentUser()
    .then( userInfo => {
      dispatch({
        type: "setUserInfo",
        payload: userInfo
      })
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <AppRoutes></AppRoutes>
        
      </div>
    </Router>
  )
}

export default App
