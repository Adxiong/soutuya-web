/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-05 23:49:35
 */
import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBox from './components/searchBox'
import Picture from './components/picture'
import axios from 'axios'
function App() {
  const [data, setData] = useState<any[]>([])
  const [searchVal, setSearchVal] = useState<string>("")
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
    <div className="App">
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

export default App
