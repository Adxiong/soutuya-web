/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-14 17:55:48
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-07 23:25:43
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
  const [selectPicKey, setSelectPicKey] = useState<string[]>([]);

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

  const setToolsDisplay = (bool: boolean = true) => {
    setDisplayTools(bool);
    if (picWrapperRef.current) {
      picWrapperRef.current.childNodes.forEach((node: any) => {
        const ele = node.childNodes[0]['classList'];
        ele.remove('pic-item-active');
      });
    }
    setSelectPicKey([]);
  };

  const selectPic = (e: BaseSyntheticEvent) => {
    if (!displayTools) {
      return;
    }
    const ele = e.target.classList;
    if (JSON.stringify(ele).includes('pic-item-active')) {
      e.target.classList.remove('pic-item-active');
      setSelectPicKey(selectPicKey.filter((key) => key != e.target.dataset.id));
    } else {
      e.target.classList.add('pic-item-active');
      setSelectPicKey([...selectPicKey, e.target.dataset.id]);
    }
  };

  const selectAll = () => {
    let picKeys = [...selectPicKey];

    if (picWrapperRef.current) {
      picWrapperRef.current.childNodes.forEach((node: any) => {
        const ele = node.childNodes[0]['classList'];
        const key = node.childNodes[0]['dataset']['id'];

        ele.remove('pic-item-active');
        picKeys = picKeys.filter((pkey) => pkey != key);
        if (isSelectAll) {
          ele.add('pic-item-active');
          picKeys.push(key);
        }
      });
    }
    setIsSelectAll(!isSelectAll);
    setSelectPicKey(picKeys);
  };

  const deletePic = () => {
    const data = picData.data.filter(
      (item) => !selectPicKey.includes(item.key.toString())
    );

    PicServer.batchDeletePic(selectPicKey).then(() => {
      setPicData({ ...picData, data });
    });
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
                <div className="pic-tool-item" onClick={deletePic}>
                  删除
                </div>
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
                  <img
                    src={item.addr}
                    alt={item.name}
                    data-id={item.addr.split('/').pop()}
                    title={item.name}
                  />
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
