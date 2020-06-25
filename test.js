var https = require("https");



https.get("https://pokeapi.co/api/v2/pokemon/ditto", (response) => {
  let body = "";
  response.on("data", data => {
    body += data.toString();
  });
  response.on("end", () => {
    response.rawListeners(body);
  });
});






module.exports.testAPI = test

