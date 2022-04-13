/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-10 20:31:18
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-13 00:42:51
 */
import axios, { AxiosInstance, AxiosResponse, Canceler, CancelToken } from "axios"
import { message } from "antd"
const queue:Record<string,any> = {}
let cancel: Canceler
const CancelToken = axios.CancelToken

class Request{
  server: AxiosInstance
  constructor(){
    this.server = axios.create({
      timeout: 6000,
      withCredentials: true
    })
    this.registerInterceptors()
  }

  registerInterceptors() {
    this.server.interceptors.request.use( config => {
      if(queue[config.url as string]) {
        queue[config.url as string]()
      }
      queue[config.url as string] = cancel
      return config
    }, err => {
      return Promise.reject(err)
    })

    this.server.interceptors.response.use( response =>{      
      return response.data
    }, error => {
      if (error && error.response) {
        const {data, status} = error.response;
        message.error({
          content: `${status}:${data.message}`,
          duration: 1,
          top: 10
        })
        return Promise.reject(error)
      } else {
        message.error({
          content: `网络异常`,
          duration: 1,
          top: 10
        })
        return Promise.reject(error)
      }
    })
  }

  get<T>(url: string, params?: Record<string,any>): Promise<T>{
    return new Promise((resolve, reject) => {
      this.server({
        url,
        method: "get",
        params,
        cancelToken: new CancelToken( c => {
          cancel = c
        } )
      })
      .then( (res: AxiosResponse) => {
        resolve(res.data as T)
      })
      .catch( err => {
        reject(err)
      })
    })
  }

  post<T>(url: string, data: Record<string, any>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.server({
        url,
        method: "post",
        data
      }).then(res => {
        resolve(res.data as T)
      }).catch( err => {
        reject(err)
      })
    })
  }

  postFormData<T>(url: string, data: FormData):Promise<T> {
    return new Promise((resolve, reject) => {
      this.server({
        url,
        headers: {
          "Content-Type": "multipart/form-data;"
        },
        method: "post",
        data
      }).then(res => {
        resolve(res.data as T)
      })
      .catch(err => reject(err))
    })
  }
}


export default new Request()