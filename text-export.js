const fs = require('fs')

const text = JSON.parse(fs.readFileSync('src/data/text.json'))
const paragraphs = text.paragraphs

let csv = ['id,text'];

Object.keys(paragraphs).forEach(function(key, index) {
  let paragraphText = '"' + paragraphs[key].text + '"'
  let paragraphId = '"' + key + '"'
  csv.push([paragraphId, paragraphText].join(','))
})

csvText = csv.join('\n')
fs.writeFileSync('src/data/text.csv', csvText)
console.log('--->text exported from json to csv file')
