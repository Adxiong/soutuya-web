/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-11 15:13:57
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-18 22:18:36
 */


import { UserInfo, UserLoginData, UserRegisterData } from "../types/user";
import request from "../utils/request";

class UserService {
  async login(data: UserLoginData): Promise<UserInfo> {
    const dat: UserInfo= await request.post('/api/user/login', data)
    return dat
  }
  async logout(): Promise<boolean>{
    return await request.get('/api/user/logout')
  }
  async getCurrentUser(): Promise<UserInfo>{
    return await request.get('/api/user/currentUser')
  }
  async register(data: UserRegisterData) {
    return await request.post('/api/user/register', data)
  }
  async uploadAvatar(data: FormData) {
    return await request.post('/api/user/uploadAvatar', data)
  }
}

export default new UserService()