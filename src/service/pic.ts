import { PicInstance } from './../types/pic';
/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-11 16:43:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-14 19:27:55
 */

import request from "../utils/request"

class PicServer{
  async upload(data){
    return await request.post('/api/pic/upload', data)
  }

  async recommend(num: number) {
    return await request.get("/api/pic/recommend", {num})
  }

  async myUploadPics(page: number, num: number): Promise<PicInstance[]> {
    return await request.get("/api/pic/myUploadPics", {page, num})
  }
}

export default new PicServer()