# egg-tencent-cloud-cos

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tencent-cloud-cos.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tencent-cloud-cos
[travis-image]: https://img.shields.io/travis/sothx/egg-tencent-cloud-cos.svg?style=flat-square
[travis-url]: https://travis-ci.org/sothx/egg-tencent-cloud-cos
[codecov-image]: https://img.shields.io/codecov/c/github/sothx/egg-tencent-cloud-cos.svg?style=flat-square
[codecov-url]: https://codecov.io/github/sothx/egg-tencent-cloud-cos?branch=master
[david-image]: https://img.shields.io/david/sothx/egg-tencent-cloud-cos.svg?style=flat-square
[david-url]: https://david-dm.org/sothx/egg-tencent-cloud-cos
[snyk-image]: https://snyk.io/test/npm/egg-tencent-cloud-cos/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tencent-cloud-cos
[download-image]: https://img.shields.io/npm/dm/egg-tencent-cloud-cos.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tencent-cloud-cos

<!--
Description here.
-->

## Install

```bash
$ npm i egg-tencent-cloud-cos --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tencentCloudCos = {
  enable: true,
  package: 'egg-tencent-cloud-cos',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.tencentCloudCos = {
  client: {
    // 用户的 SecretId
    SecretId: 'AKIDJWZQ6igs21pSuAe9tStAPfv8Ypv8hjfk',
    // 用户的 SecretKey
    SecretKey: 'f8UkqmphNsJblkX9ZoupY6diFtMdnlaEg',
    defaultParams: {
      // 默认使用的桶，在没有配置的情况下默认使用
      Bucket: 'sh-miniprogram-1251935795',
      // 默认使用的区域，在没有配置的情况下默认使用
      Region: 'ap-guangzhou',
    },
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```javascript
    this.app.tencentCloudCos.getBucket().then(res => {
      console.log(res,'res')
    })
```

## Questions & Suggestions

Please open an issue [here](https://github.com/sothx/egg-tencent-cloud-cos/issues).

## License

[MIT](LICENSE)
