const fs = require('fs')

fs.writeFileSync('1-json.json',"")

const book = {
    title: "The Hobbit",
    author: "JRR Tolkien"
}
const jsonBook = JSON.stringify(book)

fs.appendFileSync('1-json.json', jsonBook)