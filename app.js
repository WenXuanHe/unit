var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/user', function (req, res) {
  res.status(200).json({
  	name:'hewenxuan'
 	})
})
 
app.listen(3003)
module.exports = app;