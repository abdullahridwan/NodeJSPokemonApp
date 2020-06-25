var http = require("http");
var router = require("./router.js");




http.createServer(function (request, response) {
  router.cssRoute(request, response);
  router.homeRoute(request, response);
  response.end();
}).listen(8080);
console.log("Server running on localhost:8080")






