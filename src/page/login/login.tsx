/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 13:31:01
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-10 23:57:48
 */
import { Button, Form, Input } from "antd"
const Login = () => {
  return (
    <div>
      <Form>
        <Form.Item label="账号" style={{color: "#fff"}}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码">
          <Input></Input>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login