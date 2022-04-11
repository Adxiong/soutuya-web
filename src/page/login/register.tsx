/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:31:08
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 14:46:17
 */
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"
import "./style/register.css"
const Register = () => {
  return (
    <div id="registerPanel">
      <Form 
        labelCol={{span: 5}}
        wrapperCol={{span: 17}}
        >
        <Form.Item label="手机号">
          <Input size="large"></Input>
        </Form.Item>
        <Form.Item label="密码">
          <Input size="large"></Input>
        </Form.Item>
        <Form.Item label="确认密码">
          <Input size="large"></Input>
        </Form.Item>
      </Form>
        <Button className="loginBtn" size="large" type="primary">注册</Button>  
        <div>已有账号? 点击<Link to={"/user/login"}>登录</Link></div>
    </div>
  )
}

export default Register