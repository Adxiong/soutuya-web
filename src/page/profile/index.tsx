/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 23:04:17
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 16:40:48
 */

import { useRef } from "react"
import "./style/index.css"

const Profile = () => {
  const file1 = useRef<HTMLInputElement>(null)
  const file2 = useRef<HTMLInputElement>(null)
  return (
    <div>
      <h1>看看你像谁？</h1>
      <div className="photos">
       <img src="../../../access/mouse.jpg" alt="" />
       <img src="../../../access/1.jpg" alt="" />
      </div>
      <div className="title">
        匹配结果：相似度87%
      </div>
    </div>
  )
}

export default Profile