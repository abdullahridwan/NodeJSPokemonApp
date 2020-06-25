const fs = require("fs");
let renderer = require("./renderer.js")
let requests = require("./requests");
const querystring = require('querystring');


function home(request, response) {
  if (request.url === "/") {
    if (request.method === "GET") {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      renderer.view("home", {}, response);
    } else {
      request.on("data", function (data) {
        let q = querystring.parse(data.toString());
        //let pkObjPersonal = requests.pkget(q.pkName);
        //console.log(pkObjPersonal);
        console.log("Here");
        response.writeHead(303, { "Location": "/" + q.pkName });
      });
    }



  }
};




function pokemon(request, response, pkName) {
  if (request.url === "/" + pkName) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    let pkObjPersonal = requests.pkget(pkName)
    renderer.view("pokemon", pkObjPersonal, response);

  }
}

function css(request, response) {
  if (request.url === "/style.css") {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    let cssFiles = fs.readFileSync("./style.css", { encoding: "utf8" });
    response.write(cssFiles);
    request.on("error", () => console.log("There is an error"));
  }
}



module.exports.homeRoute = home;
module.exports.cssRoute = css;
module.exports.pokemon = pokemon;