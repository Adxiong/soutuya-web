/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 23:23:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 14:13:39
 */

import { RouteObject, useRoutes } from "react-router-dom";
import Login from "../page/login/login";
import Register from "../page/login/register";
import Default from "../page/default";
import Profile from "../page/profile";
import Upload from "../page/upload";
import AccountSetting from "../page/accountSetting";

const routerObject: RouteObject[] = [
  {
    element: <Default></Default>,
    path: "/"
  },
  {
    element: <Profile></Profile>,
    path: "/user/profile"
  },
  {
    element: <Login></Login>,
    path: "/user/login",
  },
  {
    element: <Register></Register>,
    path: "/user/register",
  },
  {
    element: <Upload></Upload>,
    path: "/user/upload",
  },
  {
    element: <AccountSetting></AccountSetting>,
    path: "/user/setting",
  },
]

const Router = () => {
  return useRoutes(routerObject)
}

export default Router