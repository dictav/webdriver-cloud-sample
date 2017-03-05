'use strict'
const base = require('./_wdio.conf')
const buildId = Date.now().toString()

exports.config = Object.assign(base.config, {
  maxInstances: 2, // cloud service's limit
  capabilities: [
    {
      build:'build-' + buildId,
      public: 'public',
      browserName: 'chrome',
      platform: 'WIN10',
      version: 'latest'
    },
    {
      build:'build-' + buildId,
      public: 'public',
      browserName: 'firefox',
      platform: 'WIN10',
      version: 'latest'
    },
    {
      build:'build-' + buildId,
      public: 'public',
      browserName: 'microsoftedge',
      platform: 'WIN10',
      version: 'latest'
    }
  ],
  services: ['sauce'],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true
})
