/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-14 17:55:48
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-14 19:31:10
 */

import { Form, Input, Table, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import PicServer from '../../service/pic';
import { PicInstance } from '../../types/pic';

const ProfileTabs = () => {
  const [activeKey, setActiveKey] = useState<string>('0');
  const [picData, setPicData] = useState<{
    page: number;
    num: number;
    data: PicInstance[];
  }>({
    page: 0,
    num: 50,
    data: [],
  });
  useEffect(() => {
    if (activeKey == '1') {
      PicServer.myUploadPics(picData.page, picData.num).then(
        (res: PicInstance[]) => {
          console.log(res);
          setPicData({ ...picData, data: res });
        }
      );
    }
  }, [activeKey]);

  const tabChange = (activeKey: string) => {
    setActiveKey(activeKey);
  };
  return (
    <div id="profile-table">
      <Tabs activeKey={activeKey} onChange={tabChange}>
        <Tabs.TabPane tab="基本信息" key={'0'}>
          <Form
            labelAlign="left"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 8 }}
          >
            <Form.Item label="昵称">
              <Input size="large"></Input>
            </Form.Item>
            <Form.Item label="修改密码">
              <Input size="large"></Input>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="我的上传" key={'1'}>
          {picData.data.map((item) => {
            return <img src={item.addr} alt="" />;
          })}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
