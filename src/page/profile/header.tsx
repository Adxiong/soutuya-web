/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-13 22:14:30
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-18 22:39:20
 */

import './style/header.css';
import Avatar from 'antd/lib/avatar/avatar';
import { createElement, FC, useContext } from 'react';
import ServerUser from '../../service/user';
import { StoreContext } from '../../store/store';

const Header: FC<{ nick: string; user: string }> = ({ nick, user }) => {
  const { store, dispatch } = useContext(StoreContext);
  const editAvatar = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = async (e: any) => {
      const formData = new FormData();
      formData.append('file', e['path'][0]['files'][0]);
      const result = (await ServerUser.uploadAvatar(formData)) as {
        addr: string;
      };

      dispatch({
        type: 'setAvatar',
        payload: result['addr'],
      });
    };
  };
  return (
    <div className="profileHeader">
      <div className="avatar">
        <img src={store.userInfo.avatar} alt="" />
        <div className="edit-btn" onClick={editAvatar}>
          点击修改
        </div>
      </div>

      <div className="profileInfo">
        <div className="nick">昵称：{store.userInfo.nick}</div>
        <div className="user">账号：{store.userInfo.user}</div>
      </div>
    </div>
  );
};

export default Header;
