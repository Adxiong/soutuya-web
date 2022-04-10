/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:30:46
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 00:20:55
 */
import { useEffect, useRef, useState } from "react"
import Login from "./login"
import Register from "./register"
import "./style/index.css"

enum Mode{
  login,
  register
}

const LoginComponent = () => {
  const [ mode, setMode ] = useState<Mode>(Mode.login)
  const FormComponent = () => {
    switch(mode) {
      case Mode.login:
        return <Login></Login>
      case Mode.register:
        return <Register></Register>
    }
  }
  const FooterLink = () => {
    switch(mode) {
      case Mode.login:
        return <span onClick={()=>{setMode(Mode.register)}}>"没有账号？点击注册"</span>
      case Mode.register:
        return <span onClick={()=>{setMode(Mode.login)}}>"已有账号，点击登录"</span>   
    }
  } 

  useEffect(()=> {

  },[])

  return (
    <div id="loginPanel">
      {
        FormComponent()
      }
      <div>
        {
          FooterLink()
        }
      </div>
    </div>
  )
}

export default LoginComponent