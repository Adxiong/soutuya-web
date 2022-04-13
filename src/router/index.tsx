/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-06 23:23:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 22:29:00
 */

import { RouteObject } from "react-router-dom";
import Login from "../page/login/login";
import Register from "../page/login/register";
import Default from "../page/default";
import Profile from "../page/profile";
import Upload from "../page/upload";
import AuthMiddleware from "./authMiddleware";
import LoginMiddleware from "./loginMiddleware";

const router:RouteObject[] = [
  {
    element: <Default></Default>,
    path: "/"
  },
  {
    element: (
      <AuthMiddleware to="/user/login">
        <Profile></Profile>
      </AuthMiddleware>
    ),
    path: "/user/profile"
  },
  {
    element:(
      <LoginMiddleware to="/" >
        <Login></Login>
      </LoginMiddleware>
    ),
    path: "/user/login",
  },
  {
    element:(
      <LoginMiddleware to="/">
        <Register></Register>
      </LoginMiddleware>
    ),
    path: "/user/register",
  },
  {
    element: (
      <AuthMiddleware to="/user/login">
        <Upload></Upload>
      </AuthMiddleware>),
    path: "/user/upload",
  },
]

export default router
