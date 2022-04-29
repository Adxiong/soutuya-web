/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-07 14:00:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-29 21:24:36
 */
import { BaseSyntheticEvent, DragEventHandler, useRef, useState } from 'react';
import './style/index.css';
import PicService from '../../service/pic';
import { Button, Form, Input, InputRef, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Upload = () => {
  const UploadRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);
  const [tagList, setTagList] = useState<string[]>([]);
  const [picFile, setPicFile] = useState<File>();
  const [visibleAddTagInput, setVisibleAddTagInput] = useState<boolean>(false);
  const [addTagValue, setAddTagValue] = useState<string>('');
  const handleClickUpload = () => {
    InputRef.current?.click();
  };
  const handleChange = () => {
    console.log(InputRef.current?.files);
    setPicFile(InputRef.current!.files![0]);
  };
  const handleDrop = (e: any) => {
    console.log(e.dataTransfer.files);
    setPicFile(e.dataTransfer.files[0]);
    UploadRef.current!.style.borderColor = 'rgb(255,255,255)';
    e.preventDefault();
  };
  const handleDragOver = (e: any) => {
    // console.log(e.dataTransfer);
    UploadRef.current!.style.borderColor = 'red';
    // e.defaultParent()
    e.preventDefault();
    // return false
  };

  const handleDragLeave = (e: any) => {
    UploadRef.current!.style.borderColor = 'rgb(255,255,255)';
    e.preventDefault();
  };

  const submit = () => {
    if (InputRef.current && InputRef.current.files) {
      const form = new FormData();
      const file = picFile;
      // console.log(file.stream());

      console.log(file);

      form.append('file', file!);
      PicService.upload(form);
    }
  };

  const showAddTag = () => {
    setVisibleAddTagInput(true);
  };

  const handleInputChange = (e: BaseSyntheticEvent) => {
    e.target.value && setAddTagValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (!addTagValue) {
      setVisibleAddTagInput(false);
      return;
    }
    addTagValue && setTagList([...tagList, addTagValue]);
    setAddTagValue('');
    setVisibleAddTagInput(false);
  };
  return (
    <div id="UploadPage">
      <Form
        className="uploadForm"
        labelCol={{ span: 4 }}
        labelAlign="left"
        wrapperCol={{ span: 10 }}
      >
        <Form.Item label="标题">
          <Input></Input>
        </Form.Item>
        <Form.Item label="关键字">
          {tagList.map((tagItem, index) => (
            <Tag className="tag" key={index} closable>
              {tagItem}
            </Tag>
          ))}
          {visibleAddTagInput && (
            <Input
              autoFocus
              className="tagInput"
              type="text"
              size="small"
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            ></Input>
          )}
          {!visibleAddTagInput && (
            <Tag onClick={showAddTag}>
              <PlusOutlined /> new tag
            </Tag>
          )}
        </Form.Item>

        <Form.Item label="文件上传">
          <div
            ref={UploadRef}
            id={picFile ? '' : 'upload-component'}
            // draggable="true"
            onClick={handleClickUpload}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {picFile ? (
              picFile.name
            ) : (
              <div>
                拖拽文件到此上传 或者
                <span className="clickUploadSpan">点击上传</span>
              </div>
            )}
            <input
              type="file"
              className="inputFile"
              ref={InputRef}
              onChange={handleChange}
            />
          </div>
        </Form.Item>
        <Button type="primary" onClick={submit}>
          上传
        </Button>
      </Form>
    </div>
  );
};

const Source = () => {};

export default Upload;
