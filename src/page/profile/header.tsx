/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-13 22:14:30
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 22:47:14
 */

import "./style/header.css"
import Avatar from "antd/lib/avatar/avatar"
import { FC } from "react"

const Header:FC<{nick:string, user: string}> = ({nick, user}) => {
  return (
    <div className="profileHeader">
      <Avatar className="avatar">{nick}</Avatar>
      <div className="profileInfo">
        <div className="nick">昵称：{nick}</div>
        <div className="user">账号：{user}</div>
      </div>
    </div>
  )
}

export default Header