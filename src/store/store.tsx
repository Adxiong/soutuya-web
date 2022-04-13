/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-12 23:23:57
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 15:35:46
 */

import { Store } from "antd/lib/form/interface";
import { createContext, Dispatch, useContext, useReducer } from "react"
import { UserInfo } from "../types/user";


interface State {
  userInfo: UserInfo
}

interface actionsType {
  setUserInfo: void
  clearUserInfo: void
}


const reducer = (state: State, actions: {type: keyof actionsType, payload: any}) =>{  
  switch (actions.type){
    case "setUserInfo":       
      return {
        userInfo: actions.payload
      }
    case "clearUserInfo":
      return {
        userInfo: null
      }
    default:
      return state
  }
}

interface ContextInterface {
  store: State,
  dispatch: Dispatch<{ 
    type: keyof actionsType;
    payload: any;
  }>
}

export const StoreContext = createContext({} as ContextInterface)


const StoreFC = ({children}) => {
  const [ store, dispatch ] = useReducer(reducer, {} as State)

  return (
    <div>
      <StoreContext.Provider value={{store,dispatch}}>
        {children}
      </StoreContext.Provider>
    </div>
  )
}

export default StoreFC

