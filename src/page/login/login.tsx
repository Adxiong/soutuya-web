/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:31:01
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 15:20:11
 */
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { useForm } from "antd/lib/form/Form"
import { Link } from "react-router-dom"
import "./style/loginx.css"
import UserService from "../../service/user"

interface FormData{
  user: string
  password: string
}
const Login = () => {
  const [form] = useForm<FormData>()
  const login = () => {
    form.validateFields()
    .then( data => {
      console.log(data);
      UserService.login(data)
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div id="loginPanel">
      <Form 
        className="loginForm" 
        form={form}>
        <Form.Item name="user">
          <Input size="large" prefix={<UserOutlined />}></Input>
        </Form.Item>
        <Form.Item name="password">
          <Input.Password size="large" prefix={<LockOutlined />} allowClear ></Input.Password>
        </Form.Item>
      </Form>
      <Button size="large" className="loginBtn" type="primary" onClick={login}>登录</Button>
      <div>没有账号? 点击<Link to={"/user/register"}>注册</Link></div>
    </div>
  )
}

export default Login