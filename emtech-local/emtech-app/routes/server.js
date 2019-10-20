var express = require('express');
var app = express();
var zabo = require('zabo-sdk-js');
var http = require('http');
var url = require('url') ;

http.createServer(function (req, res) {
  var hostname = req.headers.host; // hostname = 'localhost:8080'
  var pathname = url.parse(req.url).pathname; // pathname = '/Zabot'
  console.log('http://' + hostname + pathname);

  res.writeHead(200);
  res.end();
}).listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
   zabo.init({
      apiKey: 'd0e625eb91e9e40f67bf1ae9636d42745be8f37d',
      secretKey: 'f9daeb948eedfc34f657e8cdbebc965635b856bf4977e813f30c90070a6339c4',
      env: 'sandbox'
   })
      .then(async function(){
   try {
      let user = await zabo.users.create({"id":"ff0dc466-547b-45f6-a34c-f45463489e2f","token":"zabosession-fthc60vL0XcBm4N0pojJYeTyRWyJwvC0vcEWLU1IkajuIGrulsLsz6L1JvMw5n8J","exp_time":"Tue, 19 Nov 2019 05:37:50 GMT","address":"de0d316a-8760-45e3-a756-2347fa3988bb","wallet_provider_name":"binance","wallet_provider_display_name":"Binance","currencies":[{"currency":"BAT","balance":"101.612457","updated_at":1560134750000},{"currency":"DAI","balance":"22.770205","updated_at":1560134750000},{"currency":"HBAR","balance":"0","updated_at":1560134750000},{"currency":"BTC","balance":"0.932","updated_at":1560134750000},{"currency":"ETH","balance":"5.068","updated_at":1560134750000},{"currency":"BCH","balance":"3.000472","updated_at":1560134750000}],"created_at":1563128809,"updated_at":1570582277,"resource_type":"account"})
      console.log(user)
   } catch(e){console.log(e)}  
   })
})