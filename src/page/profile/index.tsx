/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-07 14:02:00
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-14 17:59:59
 */

import './style/index.css';
import Header from './header';
import { StoreContext } from '../../store/store';
import { useContext } from 'react';
import ProfileTabs from './profileTabs';

const Profile = () => {
  const { store } = useContext(StoreContext);

  return (
    <div id="profile">
      <Header nick={store.userInfo.nick} user={store.userInfo.user}></Header>
      <ProfileTabs></ProfileTabs>
    </div>
  );
};

export default Profile;
