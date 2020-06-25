var https = require("https");


function printMessage(pkObj) {
  console.log(pkObj);
}

function pkObjPersonal(pkObj) {
  let pkObjP = {
    "name": pkObj.name,
    "main_ability": pkObj.abilities[0].ability.name,
    "base_exp": pkObj.base_experience,
  }
  return pkObjP
}


function pokemonGet(pkName) {
  const thisReq = https.get(`https://pokeapi.co/api/v2/pokemon/${pkName}`, (response) => {
    let body = "";
    response.on("data", data => {
      body += data.toString();
    });
    response.on("end", () => {
      let pkObj = JSON.parse(body);
      printMessage(pkObj);
      return pkObjPersonal(pkObj);
    });
  });

  thisReq.on("error", error => console.log(error.message))
};


module.exports.pkget = pokemonGet;