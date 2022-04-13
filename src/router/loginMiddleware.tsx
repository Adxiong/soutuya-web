/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-13 21:44:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 21:47:09
 */

import React, { FC, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { StoreContext } from '../store/store'

const loginMiddleware: FC<{to: string}> = ({to, children}) => {
  const {store} = useContext(StoreContext)
  
  const isLoginIn = !!store.userInfo
  
  return isLoginIn ? <Navigate to={to} /> : <>{children}</> 
}

export default loginMiddleware
