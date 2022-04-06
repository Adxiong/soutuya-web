/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:18:59
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-06 13:49:30
 */
import "./style/index.css"



interface Props {
  login: () => void
}

const Header = (props: Props) => {
  return (
    <div id="header">
      <div className="logo">图鸭</div>
      <div className="nav">
        <ul>
          <li onClick={props.login}>登录</li>
        </ul>
      </div>
    </div>
  )
}

export default Header