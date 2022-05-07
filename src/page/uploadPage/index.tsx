/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-07 14:00:02
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-07 22:46:17
 */
import { BaseSyntheticEvent, useState } from 'react';
import './style/index.css';
import PicService from '../../service/pic';
import { Button, Form, Input, Upload, Tag, Spin, Space } from 'antd';
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';
import imgCompress from '../../utils/imgCompress';

const UploadPage = () => {
  const navigate = useNavigate();
  const [tagList, setTagList] = useState<string[]>([]);
  const [visibleAddTagInput, setVisibleAddTagInput] = useState<boolean>(false);
  const [addTagValue, setAddTagValue] = useState<string>('');
  const [form] = useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [uploadRes, setUploadRes] = useState<string>('');

  const submit = () => {
    setSubmitting(true);
    form.validateFields().then(async (form) => {
      const data = new FormData();
      const file = imgCompress.fileToBase64Compress(form.file.file);
      data.append('files', form.file.file);
      data.append('title', form.title);
      data.append('keyWord', JSON.stringify(tagList));
      const res: any = await PicService.upload(data);
      if (res) {
        setUploadRes(res.addr);
      }
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

  const continuerUpload = () => {
    setUploadRes('');
    setSubmitting(false);
  };

  const goHome = () => {
    navigate('/');
  };
  return (
    <div id="UploadPage">
      {!submitting && (
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
      )}
      {submitting && (
        <div className="uploadForm active">
          {!uploadRes && (
            <>
              <Spin></Spin>
              内容正在上传中
            </>
          )}
          {uploadRes && (
            <>
              <img width={100} height={100} src={uploadRes} alt="" />
              图片地址：<span>{uploadRes}</span>
              <div>
                <Space>
                  <Button onClick={goHome}>返回主页</Button>
                  <Button onClick={continuerUpload}>继续上传</Button>
                </Space>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadPage;
