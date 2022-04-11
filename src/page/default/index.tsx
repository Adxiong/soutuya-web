/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 23:04:24
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 23:40:33
 */
import SearchBox from '../../components/searchBox'
import Picture from '../../components/picture'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./style/index.css"
import PicServer from "../../service/pic"
const  Default = () => {
  const [searchVal, setSearchVal] = useState<string>("")
  const [data, setData] = useState<any[]>([])

  useEffect( () => {
    axios.get("http://api.isoyu.com/api/picture/index")
    .then( res => {
      console.log(res.data.data);
      setData(res.data.data)
    })

    PicServer.recommend(50)
    .then(res =>{
      console.log(res);
      
    })
  }, [])


  const afterChange = (value: string) => {
    setSearchVal(value)
  }
  const filterData = (data: any[]) => {
    return data.filter( item => item.desc.includes(searchVal))
  }

  return (
    <div className="picture">
      <SearchBox afterChange={afterChange}/>
      <div id='picture-content'>
        {
          filterData(data).map(item => (
            <div key={item.setid}>
              <Picture
                imgAddr={item.cover}
                imgTitle={item.desc}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Default