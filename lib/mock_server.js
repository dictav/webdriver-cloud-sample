const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const httpServer = require('http-server')

const app = express();
app.use(bodyParser.text())
app.use(cors())

var lastRequest = {}
var handler = (req, res) => {
  console.log(`${req.method} ${req.originalUrl}`)
  lastRequest = req
  res.status(204).send('')
}

app.get('/', handler)
app.post('/', handler)

app.get('/last_request', function (req, res) {
  const {params, originalUrl, cookies, xhr, body, method, headers} = lastRequest
  res.json({params, originalUrl, cookies, xhr, body, method, headers})
})

const root = 'test/public'

httpServer.createServer({ root }).listen(3000)
httpServer.createServer({ root }).listen(3001)
app.listen(3030)
