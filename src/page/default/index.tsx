/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-06 23:04:24
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-05 14:17:17
 */
import SearchBox from '../../components/searchBox';
import Picture from '../../components/picture';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style/index.css';
import PicServer from '../../service/pic';
const Default = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    PicServer.recommend(50).then((res: any) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, []);

  const afterChange = (value: string) => {
    setSearchVal(value);
  };
  const filterData = (data: any[]) => {
    return data.filter((item) => item.name.includes(searchVal));
  };

  return (
    <div className="picture">
      <SearchBox afterChange={afterChange} />
      <Picture data={filterData(data)} />
    </div>
  );
};

export default Default;
