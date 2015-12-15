// var http = require('http');
// var fs = require('fs');
// var express= require('express')
// // var dispatcher = require('http-dispatcher');
//
// //file to serve index
//
// var PORT = 3000;
// var ip = "127.0.0.1";
// var app = express();
// var server = http.createServer(handleRequest);
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on:" + ip + ":" + PORT);
// });
//
// function handleRequest(request, response){
//   console.log(request)
//   var urlParser = require('url');
//   //console.log("Response",parts)
//   var statusCode;
//   var parts = urlParser.parse(request.url)
//   console.log("parts ", parts)
//     if(request.pathname === "/"){
//       statusCode = 200;
//     }else{
//       statusCode = 404;
//     }
//     if (request.method === "GET") {
//     response.writeHead(statusCode, headers);
//     response.end("Hello world" + request.url);
//     console.log("GET");
//     //console.log(data);
//   }
//
//  }
//
//  var headers = {
//    "access-control-allow-origin": "*",
//    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//    "access-control-allow-headers": "content-type, accept",
//    "access-control-max-age": 10, // Seconds.
//    "Content-Type": "application/json"
//  };

// app.get("/", function(req, res){
//   res.render('index')
// })

var express = require('express');
var app = express();
app.use(express.static('jquery'));
app.use(express.static('bower_components'));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
