/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-07 14:00:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-11 18:37:06
 */
import { BaseSyntheticEvent, DragEventHandler, useRef, useState } from "react"
import "./style/index.css"
import PicService from "../../service/pic";
import { Button } from "antd";

const Upload = () => {
  const UploadRef = useRef<HTMLDivElement>(null)
  const InputRef = useRef<HTMLInputElement>(null)
  const [picFile, setPicFile ] = useState<File>()

  const handleClickUpload = () => {
    InputRef.current?.click()
  }
  const handleChange = () => {
    console.log(InputRef.current?.files)
    setPicFile(InputRef.current!.files![0])
  }
  const handleDrop = (e: any) => {
    console.log(e.dataTransfer.files);
    setPicFile(e.dataTransfer.files[0])
    UploadRef.current!.style.borderColor = "rgb(255,255,255)"
    e.preventDefault()

  }
  const handleDragOver = (e: any) => {
    // console.log(e.dataTransfer);
    UploadRef.current!.style.borderColor = "red"
    // e.defaultParent()
    e.preventDefault()
    // return false
  }

  const handleDragLeave = (e: any) => {
    UploadRef.current!.style.borderColor = "rgb(255,255,255)"
    e.preventDefault()
  }

  const submit = () => {
    if( InputRef.current && InputRef.current.files) {
      
      const form = new FormData()
      const file = picFile
      // console.log(file.stream());
      
      console.log(file);
      
      form.append("file", file!)
      PicService.upload(form)
    }
   
  }

  return (
    <div>
        <div 
      ref={UploadRef}
      id="upload-component" 
      // draggable="true" 
      onClick={handleClickUpload}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      >
      {
        picFile ? (          
          picFile.name
        ) : (
          <div>
             拖拽文件到此上传 或者
             <a href="">点击上传</a>
          </div>
          
        )
      }
      <input type="file" ref={InputRef} onChange={handleChange}/>
    </div>
     <Button onClick={submit}>上传</Button>
    </div>
  )
}

export default Upload