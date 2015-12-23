var express = require('express');
var app = express();
var http = require('http');

var port = process.env.PORT || 3000;


app.use(express.static(__dirname));


var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});