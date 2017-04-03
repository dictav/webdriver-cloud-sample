'use strict'
const assert = require('assert')
const request = require('request')
const uuidV4 = require('uuid/v4')

const host1 = process.env.HOST1 || 'localhost:3000'
const host2 = process.env.HOST2 || 'localhost:3001'
const hostApi = process.env.HOST_API || 'localhost:3030'

describe('Beacon Test', () => {
  before(() => {
    console.log('host1', host1)
    console.log('host2', host2)
    console.log('hostApi', hostApi)
  })

  it('GET', () => {
    var uuid = uuidV4()
    var url = 'http://' + host1 + '/beacon_get.html?domain=' + hostApi + '&uuid=' + uuid
    browser.url(url)

    browser.call(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var url = 'http://' + hostApi + '/last_request?uuid=' + uuid
          request.get({url, timeout: 1000}, (err, res) => {
            var data = null
            asset.doesNotThrow(() => {
              data = JSON.parse(res.body)
            })
            assert.equal(data.method, 'GET')
            resolve()
          })
        }, 800)
      })
    })
  })

  it('POST', () => {
    var uuid = uuidV4()
    var url = 'http://' + host1 + '/beacon_post.html?domain=' + hostApi + '&uuid=' + uuid
    browser.url(url)

    browser.call(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var url = 'http://' + hostApi + '/last_request?uuid=' + uuid
          request.get({url, timeout: 1000}, (err, res) => {
            var data = null
            asset.doesNotThrow(() => {
              data = JSON.parse(res.body)
            })
            assert.equal(data.method, 'GET')
            resolve()
          })
        }, 800)
      })
    })
  })
})
