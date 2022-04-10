/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 23:04:24
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-09 12:20:42
 */
import SearchBox from '../../components/searchBox'
import Picture from '../../components/picture'
import { useEffect, useState } from 'react'
import axios from 'axios'

const  Default = () => {
  const [searchVal, setSearchVal] = useState<string>("")
  const [data, setData] = useState<any[]>([])

  useEffect( () => {
    axios.get("http://api.isoyu.com/api/picture/index")
    .then( res => {
      console.log(res.data.data);
      setData(res.data.data)
    })
  }, [])


  const afterChange = (value: string) => {
    setSearchVal(value)
  }
  const filterData = (data: any[]) => {
    return data.filter( item => item.desc.includes(searchVal))
  }

  return (
    <div>
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