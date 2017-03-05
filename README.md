# webdriver-cloud-sample

## Badge

[![Sauce Labs Build Status](https://saucelabs.com/browser-matrix/dictav.svg)](https://saucelabs.com/beta/builds/f22dedf55a1a4025bfb8975e25f89138)

## Overview

This is e2e test sample with [WebdriverIO](https://webdriver.io) using [Sauce Labs](https://saucelabs.com), [BrowserStack](https://browserstack.com) or [TestingBot](https://testingbot.com).

## Usage

### Sauce Labs

```
$ export SAUCE_USERNAME=<USER_NAME>
$ export SAUCE_ACCESS_KEY=<ACCESS_KEY>
$ npm run test:saucelabs
```

### BrowserStack

```
$ export SAUCE_USERNAME=<AUTOMATE_USERNAME>
$ export SAUCE_ACCESS_KEY=<AUTOMATE_ACCESS_KEY>
$ npm run test:browserstack
```

### TestingBot

```
$ export TESTINGBOT_KEY=<ACCESS_KEY>
$ export TESTINGBOT_SECRET=<ACCESS_SECRET>
$ npm run test:testingbot
```
