/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-05 23:34:37
 */
import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBox from './components/searchBox'
import Picture from './components/picture'
import axios from 'axios'
function App() {
  const [data, setData] = useState<any[]>([])
  
  useEffect( () => {
    axios.get("http://api.isoyu.com/api/picture/index")
    .then( res => {
      console.log(res.data.data);
      setData(res.data.data)
    })
  }, [])

  return (
    <div className="App">
      <SearchBox/>
      <div id='picture-content'>
        {
          data.map(item => (
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
