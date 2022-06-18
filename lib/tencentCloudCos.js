'use strict';

const _ = require('lodash');

// const { promisify } = require('util');

const assert = require('assert');

function checkBucketConfig(config) {
  assert(config.SecretId && config.SecretKey,
    '[egg-tencent-cloud-cos] Must set `secretId` and `secretKey` in cos\'s config');
}

// const isObject = val => {
//   return val !== null && typeof val === 'object';
// };

const isFunction = val => {
  return typeof val === 'function';
};

// const isPromise = val => {
//   return isObject(val) && isFunction(val.then) && isFunction(val.catch);
// };

class TencentCloudCos {
  constructor(config, app) {
    this.config = _.assign({}, config);
    this.app = app;
    const {
      sdk,
      SecretId,
      SecretKey,
      setting,
      defaultParams,
    } = this.config;
    this.CosService = new sdk({
      SecretId,
      SecretKey,
      ...setting,
    });
    this.ProxyCosService = new Proxy(this.CosService, {
      get(target, propKey, receiver) {
        const cosPrototype = Object.getPrototypeOf(target);
        if (cosPrototype[propKey]) {
          if (isFunction(cosPrototype[propKey])) {
            return function(inputOptions) {
              if (!inputOptions) {
                inputOptions = {};
              }
              if (!inputOptions.Bucket) {
                inputOptions.Bucket = defaultParams.Bucket;
              }
              if (!inputOptions.Region) {
                inputOptions.Region = defaultParams.Region;
              }
              return new Promise(function(resolve, reject) {
                target[propKey](inputOptions, function(err, data) {
                  if (err) {
                    reject(err);
                    return;
                  }
                  resolve(data);
                });
              });
            };
          }
          return Reflect.get(target, propKey, receiver);
        }
        return Reflect.get(target, propKey, receiver);
      },
    });
    return this.ProxyCosService;
  }
}

const createCos = function(config, app) {
  config = _.assign({}, config);
  checkBucketConfig(config);
  const client = new TencentCloudCos(config, app);
  return client;
};

module.exports = app => {
  app.addSingleton('tencentCloudCos', createCos);
};
