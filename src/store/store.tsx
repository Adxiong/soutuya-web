/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-12 23:23:57
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-18 22:35:48
 */

import { Store } from 'antd/lib/form/interface';
import { createContext, Dispatch, FC, useContext, useReducer } from 'react';
import { UserInfo } from '../types/user';

interface State {
  userInfo: UserInfo;
}

interface actionsType {
  setUserInfo: void;
  clearUserInfo: void;
  setAvatar: void;
}

const reducer = (
  state: State,
  actions: { type: keyof actionsType; payload: any }
) => {
  switch (actions.type) {
    case 'setUserInfo':
      return {
        userInfo: actions.payload,
      };
    case 'setAvatar':
      return {
        userInfo: { ...state.userInfo, avatar: actions.payload },
      };
    case 'clearUserInfo':
      return {
        userInfo: null,
      };
    default:
      return state;
  }
};

interface ContextInterface {
  store: State;
  dispatch: Dispatch<{
    type: keyof actionsType;
    payload: any;
  }>;
}

export const StoreContext = createContext({} as ContextInterface);

const StoreFC: FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {} as State);

  return (
    <div>
      <StoreContext.Provider value={{ store, dispatch }}>
        {children}
      </StoreContext.Provider>
    </div>
  );
};

export default StoreFC;
