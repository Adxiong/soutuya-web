/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-13 22:14:30
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-16 03:51:00
 */

import './style/header.css';
import Avatar from 'antd/lib/avatar/avatar';
import { createElement, FC } from 'react';

const Header: FC<{ nick: string; user: string }> = ({ nick, user }) => {
  const editAvatar = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = (e: any) => {
      console.log(e['path'][0]['files'][0]);
    };
  };
  return (
    <div className="profileHeader">
      <div className="avatar">
        {/* <Avatar>{nick}</Avatar> */}
        <img
          src="http://ra6ar9f90.hn-bkt.clouddn.com/16499368211388b3f9a5319133"
          alt=""
        />
        <div className="edit-btn" onClick={editAvatar}>
          点击修改
        </div>
      </div>

      <div className="profileInfo">
        <div className="nick">昵称：{nick}</div>
        <div className="user">账号：{user}</div>
      </div>
    </div>
  );
};

export default Header;
