const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const httpServer = require('http-server')

const app = express();
app.use(bodyParser.text())
app.use(cors())

var lastRequest = {}
var handler = (req, res) => {
  var uuid = req.query.uuid
  if (!uuid) {
    res.status(400).send('uuid is reuired')
    return
  }
  console.log('beacon', uuid)
  lastRequest[uuid] = req
  res.status(204).send('')
}

app.get('/', handler)
app.post('/', handler)

app.get('/last_request', function (req, res) {
  var uuid = req.query.uuid
  if (!uuid) {
    console.log('uuid is required', uuid)
    res.status(400).send('uuid is reuired')
    return
  }
  console.log('last_request', uuid)
  var lreq = lastRequest[uuid]
  if (!lreq) {
    console.log('Not found such as uuid:', uuid)
    res.status(404).send('Not found such as uuid:' + uuid)
    return
  }
  const {params, originalUrl, cookies, xhr, body, method, headers} = lreq
  res.json({params, originalUrl, cookies, xhr, body, method, headers})
})

const root = 'test/public'

httpServer.createServer({ root }).listen(3000, () => console.log('start host1'))
httpServer.createServer({ root }).listen(3001, () => console.log('start host2'))
app.listen(3030, () => console.log('start api'))
