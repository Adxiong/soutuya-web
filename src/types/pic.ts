/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-14 19:14:53
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-07 22:57:55
 */
export interface InsertPicParams {
  name: string,
  addr: string,
  uploader: string,
}

export interface PicInstance extends InsertPicParams{
  id: number
  key: string
}
