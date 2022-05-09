import React, { BaseSyntheticEvent } from 'react';
import {ReactPropTypes } from 'react';
/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-08 11:45:06
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-09 22:53:03
 */
type OnClickEvent = (message:any) => void

type OnRouterChange = (url:string) => void

interface InitReactTrack {
  onClickEvent?:OnClickEvent;
  onRouterChange?:OnRouterChange;
}
interface ExtendReactPropTypes extends ReactPropTypes{
  track: any
}

const propTrackWithEvent = (props: any, callback: (message: any) => void) => {
  if(props.onClick) {
    const originClick = props.onClick
    props.onClick = (e: BaseSyntheticEvent)=> {
      callback && callback(props.track)
      originClick(e)
    }
  }
  return props
}

const initTrackEvent = ( {onClickEvent, onRouterChange }: InitReactTrack) => {
  const originReactCreateElement = React.createElement
  
  React.createElement = (...args: any[]) => {
    let props = args[1]
    if(onClickEvent && props.track) {
      args[1] = propTrackWithEvent(props, onClickEvent)
    }
    return originReactCreateElement()
  }
}

export default initTrackEvent