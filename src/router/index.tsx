/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-06 23:23:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-16 03:03:13
 */

import { RouteObject } from 'react-router-dom';
import Login from '../page/login/login';
import Register from '../page/login/register';
import Default from '../page/default';
import Profile from '../page/profile';
import Upload from '../page/upload';
import AuthMiddleware from './authMiddleware';
import LoginMiddleware from './loginMiddleware';
import React, { lazy } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// const Default = lazy(() => import('../page/default'));

const router: RouteObject[] = [
  {
    element: (
      // <React.Suspense
      //   fallback={
      //     <Spin
      //       indicator={
      //         <LoadingOutlined
      //           spin
      //           // style={{ fontSize: '24px' }}
      //         ></LoadingOutlined>
      //       }
      //     />
      //   }
      // >
      // </React.Suspense>
      <Default></Default>
    ),
    path: '/',
  },
  {
    element: (
      <AuthMiddleware to="/user/login">
        <Profile></Profile>
      </AuthMiddleware>
    ),
    path: '/user/profile',
  },
  {
    element: (
      <LoginMiddleware to="/">
        <Login></Login>
      </LoginMiddleware>
    ),
    path: '/user/login',
  },
  {
    element: (
      <LoginMiddleware to="/">
        <Register></Register>
      </LoginMiddleware>
    ),
    path: '/user/register',
  },
  {
    element: (
      <AuthMiddleware to="/user/login">
        <Upload></Upload>
      </AuthMiddleware>
    ),
    path: '/user/upload',
  },
];

export default router;
