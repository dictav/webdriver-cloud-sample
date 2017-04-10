# webdriver-cloud-sample

This is e2e test sample with [WebdriverIO](https://webdriver.io) using [Sauce Labs](https://saucelabs.com), [BrowserStack](https://browserstack.com) or [TestingBot](https://testingbot.com).

### BrowserStack

[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=ZEVqNzNRdEJYU1N1d1ZQaUNRWmtzVTVibExMSi90My92VXR0NWpmbURqWT0tLUR6K1oyRFArRFNCY3NzL0xMRGU5Snc9PQ==--ffcd1aec291ebf7f6271965b2f74adaa95579742)](https://www.browserstack.com/automate/builds/636c9b665ca139af9dd5723bf8ea9d94f756fb1c)

BrowserStack is very powerful cloud-based cross-browser testing service!

```
$ export SAUCE_USERNAME=<AUTOMATE_USERNAME>
$ export SAUCE_ACCESS_KEY=<AUTOMATE_ACCESS_KEY>
$ npm run test:browserstack
```

### Sauce Labs

[![Sauce Labs Build Status](https://saucelabs.com/browser-matrix/dictav.svg)](https://saucelabs.com/beta/builds/f22dedf55a1a4025bfb8975e25f89138)

Sauce Labs is very famouse cloud-based cross-browser testing service.

```
$ export SAUCE_USERNAME=<USER_NAME>
$ export SAUCE_ACCESS_KEY=<ACCESS_KEY>
$ npm run test:saucelabs
```

### TestingBot

TestingBot is very reasonable cloud-based cross-browser testing service.

```
$ export TESTINGBOT_KEY=<ACCESS_KEY>
$ export TESTINGBOT_SECRET=<ACCESS_SECRET>
$ npm run test:testingbot
```
