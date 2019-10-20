var express = require('express');
var app = express();

var http = require('http');
var url = require('url') ;

http.createServer(function (req, res) {
  var hostname = req.headers.host; // hostname = 'localhost:8080'
  var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
  console.log('http://' + hostname + pathname);

  res.writeHead(200);
  res.end();
}).listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
   zabo.users.create(account)
})
