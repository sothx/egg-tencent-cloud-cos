'use strict';

const tencentCloudCos = require('./lib/tencentCloudCos');

module.exports = app => {
  if (app.config.tencentCloudCos.app) tencentCloudCos(app);
};
