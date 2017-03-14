'use strict'
const assert = require('assert')
const httpServer = require('http-server')
const request = require('request')

const mockServer = require('./mock_server.js').mockServer

const root = 'test/public'

const host1 = process.env.HOST1 || 'localhost:3000'
const host2 = process.env.HOST2 || 'localhost:3001'
const hostApi = process.env.HOST_API || 'localhost:3030'

describe('Console Log', () => {
  before(() => {
    httpServer.createServer({ root }).listen(3000)
    httpServer.createServer({ root }).listen(3001)
    mockServer.listen(3030)
  })

  it('gets the title of page1', () => {
    const title = browser.url('http://' + host1 + '/page1.html').getTitle()
    assert.equal(title, 'HOST1')
  })

  it('gets the title of page2', () => {
    const title = browser.url('http://' + host2 + '/page2.html').getTitle()
    assert.equal(title, 'HOST2')
  })

  it('send beacon', () => {
    browser.url('http://' + host1 + '/beacon.html?' + hostApi)

    browser.call(() => {
      return new Promise((resolve, reject) => {
        request.get({url:'http://' + hostApi + '/last_request', timeout: 1000}, (err, res) => {
          const data = JSON.parse(res.body)
          assert.equal(data.method, 'GET')
          resolve()
        })
      })
    })
  })

  it('has no SEVERE error', () => {
    browser.call(function() {
      // wait 500msec to load js
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 500)
      })
    })
    try {
      // Because `log/types` is not webdriver specification, the exception is occured on cloud
      const errors = browser.log('browser').value
      for (var i = 0; i < errors.length; i++) {
        var err = errors[i]
        assert (err.level !== 'SEVERE', err.message)
      }
    } catch(err) { }
  })
})
