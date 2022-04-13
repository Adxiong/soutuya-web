/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-13 17:48:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 21:47:22
 */

import React, { FC, ReactPropTypes, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { StoreContext } from '../store/store'

const AuthMiddleware: FC<{to: string;}> = ({to, children}) => {
  const {store} = useContext(StoreContext)
  
  const isLoginIn = !!store.userInfo
  
  return isLoginIn ? <>{children}</> : <Navigate to={to} />
  
}

export default AuthMiddleware