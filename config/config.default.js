'use strict';

const tencentCloudSdk = require('cos-nodejs-sdk-v5');
/**
 * egg-tencent-cloud-cos default config
 * @member Config#tencentCloudCos
 * @property {String} SOME_KEY - some description
 */
exports.tencentCloudCos = {
  default: {
    // 腾讯云SDK实例
    sdk: tencentCloudSdk,
    // 用户的 SecretId
    SecretId: '',
    // 用户的 SecretKey
    SecretKey: '',
    setting: {
      // 同一个实例下上传的文件并发数，默认值3
      FileParallelLimit: 3,
      // 同一个上传文件的分块并发数，默认值3
      ChunkParallelLimit: 3,
      // 分块上传及分块复制时，出错重试次数，默认值2（加第一次，请求共3次）
      ChunkRetryTimes: 2,
      // 分块上传时，每块的字节数大小，默认值1048576（1MB）
      ChunkSize: 1048576,
      // 使用 uploadFiles 批量上传时，文件大小大于该数值将使用按分片上传，否则将调用简单上传，单位 Byte，默认值1048576（1MB）
      SliceSize: 1048576,
      // 进行分块复制操作中复制分块上传的并发数，默认值20
      CopyChunkParallelLimit: 20,
      // 使用 sliceCopyFile 分块复制文件时，每片的大小字节数，默认值10485760（10MB）
      CopyChunkSize: 10485760,
      // 使用 sliceCopyFile 分片复制文件时，文件大小大于该数值将使用分片复制 ，否则将调用简单复制，默认值10485760（10MB）
      CopySliceSize: 10485760,
      // 上传进度的回调方法 onProgress 的回调频率，单位 ms ，默认值1000
      ProgressInterval: 1000,
      // 发请求时用的协议，可选项https:、http:，默认判断当前页面是http:时使用http:，否则使用https:
      Protocol: '',
      // 调用 getService 方法时，请求的域名，例如service.cos.myqcloud.com
      ServiceDomain: '',
      // 调用操作存储桶和对象的 API 时自定义请求域名。可以使用模板，例如"{Bucket}.cos.{Region}.myqcloud.com"，即在调用 API 时会使用参数中传入的 Bucket 和 Region 进行替换
      Domain: '',
      // 上传队列最长大小，超出队列大小并失败/已完成/已取消状态的任务会被清理，默认1000
      UploadQueueSize: 1000,
      // 强制使用后缀式模式发请求。后缀式模式中 Bucket 会放在域名后的 pathname 里，并且 Bucket 会加入签名 pathname 计算，默认 false
      ForcePathStyle: false,
      // 强制上传文件也校验 Content-MD5，会对文件请求 Body 计算 md5 放在 header 的 Content-MD5 字段里，默认 false
      UploadCheckContentMd5: false,
      // 超时时间，单位毫秒，默认为0，即不设置超时时间
      Timeout: 0,
      // 多个请求同用 TCP 连接，默认 true，若请求并发量大建议 打开
      KeepAlive: true,
      // 严格校验 HTTPS 证书，默认 true
      StrictSsl: true,
      // 请求时使用 HTTP 代理，例如：http://127.0.0.1:8080
      Proxy: '',
      // 获取签名的回调方法，如果没有 SecretId、SecretKey 时，这个参数必选
      getAuthorization: undefined,
      // 是否启用全球加速域名，默认为 false。若改为 true，需要存储桶开启全球加速功能，详情请参见 开启全球加速: https://cloud.tencent.com/document/product/436/38864
      UseAccelerate: false,
    },
    defaultParams: {
      // 默认使用的桶，在没有配置的情况下默认使用
      Bucket: '',
      // 默认使用的区域，在没有配置的情况下默认使用
      Region: '',
    },
  },
  // 加载到应用程序，默认为true
  app: true,
};
