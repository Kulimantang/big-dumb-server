const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/pimmel', function (req, res) {
    res.send('Hello Pimmel!')
  })


app.listen(3000)