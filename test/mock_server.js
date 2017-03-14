const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(bodyParser.text())
app.use(cors())

var lastRequest = {}
var handler = (req, res) => {
  console.log(`${req.method} ${req.originalUrl}`)
  lastRequest = req
  res.ok()
}

app.get('/', handler)
app.post('/', handler)

app.get('/last_request', function (req, res) {
  const {params, originalUrl, cookies, xhr, body, method, headers} = lastRequest
  res.json({params, originalUrl, cookies, xhr, body, method, headers})
})

module.exports = {
  mockServer: app
}
