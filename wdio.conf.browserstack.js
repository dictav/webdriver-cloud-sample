'use strict'
const base = require('./_wdio.conf')
const buildId = Date.now().toString()

exports.config = Object.assign(base.config, {
  maxInstances: 2, // cloud service's limit
  capabilities: [
    {
      build:'build-' + buildId,
      browserName: 'chrome',
      platform: 'WINDOWS',
      version: '56'
    },
    {
      build:'build-' + buildId,
      browserName: 'firefox',
      platform: 'WINDOWS',
      version: '51'
    },
    {
      build:'build-' + buildId,
      browserName: 'edge',
      platform: 'WINDOWS',
      version: '14'
    }
  ],
  services: ['browserstack'],
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  sauceConnect: true
})
