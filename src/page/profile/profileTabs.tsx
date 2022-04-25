/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-14 17:55:48
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-26 00:00:31
 */

import { Checkbox, Form, Input, Table, Tabs } from 'antd';
import CheckableTag from 'antd/lib/tag/CheckableTag';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import PicServer from '../../service/pic';
import { PicInstance } from '../../types/pic';

const ProfileTabs = () => {
  const [activeKey, setActiveKey] = useState<string>('0');
  const [displayTools, setDisplayTools] = useState<boolean>(false);
  const [picData, setPicData] = useState<{
    page: number;
    num: number;
    data: PicInstance[];
  }>({
    page: 0,
    num: 50,
    data: [],
  });
  const picWrapperRef = useRef<HTMLDivElement>(null);
  const [isSelectAll, setIsSelectAll] = useState<boolean>(true);

  useEffect(() => {
    if (activeKey == '1') {
      PicServer.myUploadPics(picData.page, picData.num).then(
        (res: PicInstance[]) => {
          setPicData({ ...picData, data: res });
        }
      );
    }
  }, [activeKey]);

  const tabChange = (activeKey: string) => {
    setActiveKey(activeKey);
  };

  const setToolsDisplay = (bool: boolean = true) => {
    setDisplayTools(bool);
  };

  const selectPic = (e: BaseSyntheticEvent) => {
    const ele = e.target.classList;

    if (JSON.stringify(ele).includes('pic-item-active')) {
      e.target.classList.remove('pic-item-active');
    } else {
      e.target.classList.add('pic-item-active');
    }
  };

  const selectAll = () => {
    if (picWrapperRef.current) {
      picWrapperRef.current.childNodes.forEach((node: any) => {
        const ele = node.childNodes[0]['classList'];
        ele.remove('pic-item-active');
        if (isSelectAll) {
          ele.add('pic-item-active');
        }
      });
    }
    setIsSelectAll(!isSelectAll);
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
          <div className="pic-tools">
            {displayTools ? (
              <>
                <div className="pic-tool-item" onClick={selectAll}>
                  全选
                </div>
                <div className="pic-tool-item">删除</div>
                <div
                  className="pic-tool-item"
                  onClick={() => setToolsDisplay(false)}
                >
                  取消
                </div>
              </>
            ) : (
              <div className="pic-tool-item" onClick={() => setToolsDisplay()}>
                设置
              </div>
            )}
          </div>
          <div className="pic-wrapper" ref={picWrapperRef}>
            {picData.data.map((item) => {
              return (
                <div className="pic-item" key={item.id} onClick={selectPic}>
                  <img src={item.addr} alt={item.name} title={item.name} />
                </div>
              );
            })}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
