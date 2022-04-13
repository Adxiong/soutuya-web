/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-12 17:38:34
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-12 23:33:31
 */


export interface UserInfo {
  nick: string,
  user: string,
  id: string,
  avatar: string
}

export interface UserLoginData{
  user: string,
  password: string
}

export interface UserRegisterData{
  user: string,
  password: string
  nick: string
}