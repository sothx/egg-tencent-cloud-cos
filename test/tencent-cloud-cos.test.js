'use strict';

const mock = require('egg-mock');

describe('test/tencent-cloud-cos.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-cloud-cos-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tencentCloudCos')
      .expect(200);
  });
});
