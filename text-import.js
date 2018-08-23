const fs = require('fs')
const csvtojson = require('csvtojson')
const beautify = require("json-beautify")

csvtojson().fromFile('src/data/text.csv')
.then((jsonObj) => {
  const jsonOut = {
    paragraphs: {}
  }
  jsonObj.forEach(function (el) {
    jsonOut.paragraphs[el.id] = {
      text: el.text
    }
  })

  fs.writeFileSync('src/data/text.json', beautify(jsonOut, null, 2, 0))
  console.log('--->text imported from csv to json file')
})
