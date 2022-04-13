/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-07 14:02:00
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 22:50:14
 */

import "./style/index.css"
import Header from "./header"
import { StoreContext } from "../../store/store"
import { useContext } from "react"
const Profile = () => {
  const {store} = useContext(StoreContext)

  return (
    <div id="profile">
      {console.log(store.userInfo)
      }
      <Header nick={store.userInfo.nick} user={store.userInfo.user}></Header>
    </div>
  )
}

export default Profile