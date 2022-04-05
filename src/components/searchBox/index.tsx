/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 17:07:55
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-05 23:50:23
 */
import { BaseSyntheticEvent } from "react";
import "./style/index.css"

interface Props {
  afterChange: (value: string) => void;
}

const SearchBox = (props: Props) => {
  const handleChange = (e: BaseSyntheticEvent) => {
    props.afterChange(e.target.value)
  }
  return (
    <div id="searchBox">
      <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default SearchBox