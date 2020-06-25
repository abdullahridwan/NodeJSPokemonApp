const fs = require("fs");



function mergeVals(fileContents, pkObjPersonal) {
  for (var key in pkObjPersonal) {
    fileContents.replace(`{{${key}}}`, pkObjPersonal[key]);
  }

  return fileContents;
}

function view(templateName, pkObjPersonal, response) {

  let header = fs.readFileSync(`./views/header.html`, { encoding: "utf8" });
  let fileContent = fs.readFileSync(`./views/${templateName}.html`, { encoding: "utf8" });
  let footer = fs.readFileSync(`./views/footer.html`, { encoding: "utf8" });

  let mergedContents = mergeVals(fileContent, pkObjPersonal);
  console.log("merged Contents")
  console.log(mergedContents);
  let ultimateRes = header + mergedContents + footer;
  response.write(ultimateRes);
}


module.exports.view = view;