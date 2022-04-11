/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-11 15:13:57
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 17:10:09
 */


import request from "../utils/request";

class UserService {
  async login(data) {
    return await request.postFormData('/api/user/login', data)
  }

  register() {

  }
}

export default new UserService()