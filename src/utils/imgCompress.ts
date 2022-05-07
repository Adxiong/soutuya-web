/*
* @Description: 
* @version: 
* @Author: Adxiong
* @Date: 2022-05-07 20:57:33
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-07 23:19:40
*/
class ImgCompress {
  fr = new FileReader()
  MAX_WIDTH = 800
  
  /**
   * file to base64
   * @returns blob
   */
  fileToBase64Compress(file: File): Promise<any>  {
    this.fr.readAsDataURL(file)
    return new Promise( (resolve) => {
      this.fr.onload = () => {
        const _blob = this.compress(this.fr.result, file.type)
        resolve(_blob)
      }
    })
  }

  compress (base64: any, mimeType: string) {
    let cvs = document.createElement("canvas");
    let img = document.createElement("img");
    // CORS 策略，会存在跨域问题
    img.crossOrigin = "anonymous";
    return new Promise((resolve) => {
      img.src = base64;
      img.onload = () => {
        if (img.width > this.MAX_WIDTH) {
          // 做适配
          cvs.width = this.MAX_WIDTH;
          cvs.height = (img.height * this.MAX_WIDTH) / img.width;
        } else {
          cvs.width = img.width;
          cvs.height = img.height;
        }
        // 重点！ 将图片插入画布并开始绘制
        let ctx = cvs.getContext("2d")
        ctx && ctx.drawImage(img, 0, 0, cvs.width, cvs.height);

        let imageData = cvs.toDataURL(mimeType);
        let blobData = this.convertVase64UrlToBlob(imageData, mimeType);
        resolve(blobData);
      };
    });
  }

  // base64数据转成blob文件流
  convertVase64UrlToBlob(base64: string, mimeType:string){
    //mimeType 图片类型，例如 mimeType='image/png'
    let bytes = window.atob(base64.split(",")[1]); //atob方法用于解码base64
    // 创建一个长度为 bytes.length 的 buffer(一个二进制文件), 它会分配一个 16 字节（byte）的连续内存空间，并用 0 进行预填充。
    let ab = new ArrayBuffer(bytes.length);

    // Uint8Array —— 将 ArrayBuffer 中的每个字节视为 0 到 255 之间的单个数字（每个字节是 8 位）。这称为 “8 位无符号整数”。
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      // 更改里面的初始化内容
      ia[i] = bytes.charCodeAt(i);
    }
    // 创建blob格式数据，并传入二进制文件和文件原本类型
    let _blob = new Blob([ia], { type: mimeType });
    return _blob;
  };


}

export default new ImgCompress()