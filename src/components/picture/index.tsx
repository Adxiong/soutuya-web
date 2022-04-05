/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 22:45:21
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-05 23:34:29
 */

import "./style/index.css"

interface Props {
  imgAddr: string,
  imgTitle: string,
  // key: string
}

const Picture = (props: Props) => {
  return (
    <div className="picture-item">
      <img src={props.imgAddr} alt="" className="pic-img"/>
      <span className="pic-title" title={props.imgTitle}>{props.imgTitle}</span>
    </div>
  )
}

export default Picture