/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-04-07 14:00:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-10 13:22:14
 */
import { BaseSyntheticEvent, DragEventHandler, useRef, useState } from "react"
import "./style/index.css"

const Upload = () => {
  const UploadRef = useRef<HTMLDivElement>(null)
  const InputRef = useRef<HTMLInputElement>(null)
  const [file, setFile ] = useState<File>()

  const handleClickUpload = () => {
    InputRef.current?.click()
  }
  const handleChange = () => {
    console.log(InputRef.current?.files)
  }
  const handleDrop = (e: any) => {
    console.log(e.dataTransfer.files);
    setFile(e.dataTransfer.files[0])
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

  return (
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
        file ? (          
          file.name
        ) : (
          <div>
             拖拽文件到此上传 或者
             <a href="">点击上传</a>
          </div>
          
        )
      }
      <input type="file" ref={InputRef} onChange={handleChange}/>
    </div>
  )
}

export default Upload