/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:18:59
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-06 23:23:27
 */
import "./style/index.css"



interface Props {
}

const Header = (props: Props) => {
  return (
    <div id="header">
      <div className="logo">图鸭</div>
      <div className="nav">
        <ul>
          <li>登录</li>
        </ul>
      </div>
    </div>
  )
}

export default Header