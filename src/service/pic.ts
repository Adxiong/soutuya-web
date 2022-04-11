/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-11 16:43:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 23:40:09
 */

import request from "../utils/request"

class PicServer{
  async upload(data){
    return await request.post('/api/pic/upload', data)
  }

  async recommend(num: number) {
    return await request.get("/api/pic/recommend", {num})
  }
}

export default new PicServer()