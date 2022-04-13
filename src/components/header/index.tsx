/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:18:59
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 22:02:13
 */
import "./style/index.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { StoreContext } from "../../store/store"
import UserServer from "../../service/user"
interface Props {
}

const Header = (props: Props) => {  
  const navigate = useNavigate()
  const {store, dispatch} = useContext(StoreContext)
  const logout = () => {
    UserServer.logout()
    .then( res => {
      if(res){
        dispatch({
          type: "clearUserInfo",
          payload: {}
        })
      }
    })
  }
  return (
    <div id="header">
     <div className="header-content">
      <div className="logo" onClick={ () => navigate("/")}>图鸭</div>
        <div className="nav">
          <ul>
            <li onClick={ () => navigate("/user/upload")}>上传</li>
            {
              store.userInfo ? (
                <>
                  <li onClick={ () => navigate("/user/profile")}>个人中心</li>
                  <li onClick={logout}>退出</li>
                </>
              ) : (
                <>
                  <li onClick={ () => navigate("/user/login")}>登录</li>
                  <li onClick={ () => navigate("/user/register")}>注册</li>
                </>
              )
            }
            
            
          </ul>
        </div>
     </div>
    </div>
  )
}

export default Header