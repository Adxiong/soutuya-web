/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:18:59
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 14:14:43
 */
import "./style/index.css"
import { useNavigate } from "react-router-dom"


interface Props {
}

const Header = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div id="header">
     <div className="header-content">
      <div className="logo" onClick={ () => navigate("/")}>图鸭</div>
        <div className="nav">
          <ul>
            <li onClick={ () => navigate("/user/upload")}>上传</li>
            <li onClick={ () => navigate("/user/login")}>登录</li>
            <li onClick={ () => navigate("/user/register")}>注册</li>
            <li onClick={ () => navigate("/user/profile")}>个人中心</li>
            <li onClick={ () => navigate("/user/setting")}>账户设置</li>
          </ul>
        </div>
     </div>
    </div>
  )
}

export default Header