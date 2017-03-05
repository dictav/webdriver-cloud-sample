'use strict'
const base = require('./_wdio.conf')
const buildId = Date.now().toString()

exports.config = Object.assign(base.config, {
  maxInstances: 2, // cloud service's limit
  capabilities: [
    {
      build:'build-' + buildId,
      public: true,
      browserName: 'chrome',
      platform: 'WIN10',
      version: 'latest'
    },
    {
      build:'build-' + buildId,
      public: true,
      browserName: 'firefox',
      platform: 'WIN10',
      version: 'latest'
    },
    {
      build:'build-' + buildId,
      public: true,
      browserName: 'edge',
      platform: 'WIN10',
      version: 'latest'
    }
  ],
  services: ['testingbot'],
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET,
  sauceConnect: true
})
