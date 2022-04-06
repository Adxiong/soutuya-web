/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-05 16:35:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-06 13:51:56
 */
import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBox from './components/searchBox'
import Picture from './components/picture'
import Header from './components/header'
import axios from 'axios'
import LoginComponent from './components/login'
function App() {
  const [data, setData] = useState<any[]>([])
  const [showLogin, setShowLogin] = useState<boolean>(false)
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

  const handleLogin = () => {
    setShowLogin(true)
  }

  return (
    <div className="App">
      <Header
        login={handleLogin}
      />
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
      {
        showLogin && (
          <LoginComponent></LoginComponent>
        )
      }
    </div>
  )
}

export default App
