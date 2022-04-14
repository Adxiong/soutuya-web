/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-04-14 19:40:50
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-04-14 19:44:24
 */

const PicWrapper = ({ addr }: { addr: string }) => {
  return (
    <div className="pic-item">
      <img src={addr} alt="" />
    </div>
  );
};

export default PicWrapper;
