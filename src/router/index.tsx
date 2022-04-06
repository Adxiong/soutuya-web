/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 23:23:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-06 23:26:58
 */

import { RouteObject, useRoutes } from "react-router-dom";
import Login from "../page/login/login";
import Default from "../page/default";
import Profile from "../page/profile";

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
]

const Router = () => {
  return useRoutes(routerObject)
}

export default Router