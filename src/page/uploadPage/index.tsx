/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-07 14:00:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-30 13:19:08
 */
import { BaseSyntheticEvent, DragEventHandler, useRef, useState } from 'react';
import './style/index.css';
import PicService from '../../service/pic';
import { Button, Form, Input, Upload, Tag } from 'antd';
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';

const UploadPage = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [visibleAddTagInput, setVisibleAddTagInput] = useState<boolean>(false);
  const [addTagValue, setAddTagValue] = useState<string>('');
  const [form] = useForm();

  const submit = () => {
    form.validateFields().then((form) => {
      const data = new FormData();

      data.append('files', form.file.file);
      data.append('title', form.title);
      data.append('keyWord', JSON.stringify(tagList));
      PicService.upload(data);
    });
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

  const handleCloseTag = (removeTag: string) => {
    setTagList([...tagList.filter((tag) => tag != removeTag)]);
  };

  return (
    <div id="UploadPage">
      <Form
        className="uploadForm"
        labelCol={{ span: 4 }}
        labelAlign="left"
        wrapperCol={{ span: 14 }}
        form={form}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="关键字" rules={[{ required: false }]}>
          {tagList.map((tag) => (
            <Tag
              className="tag"
              key={tag}
              closable
              onClose={() => handleCloseTag(tag)}
            >
              {tag}
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

        <Form.Item
          label="文件上传"
          name="file"
          valuePropName="file"
          rules={[{ required: true }]}
        >
          <Upload.Dragger
            maxCount={1}
            beforeUpload={() => false}
            multiple={false}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Upload.Dragger>
        </Form.Item>

        <Button type="primary" onClick={submit}>
          上传
        </Button>
      </Form>
    </div>
  );
};

export default UploadPage;
