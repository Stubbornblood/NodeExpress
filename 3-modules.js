//CommonJS, every file in node is module (by default)
//Modules - Encapsulated Code (Only share minimum) ES6

const name = require("./4-name.js")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor.js")
console.log(data)

require('./7-mind-grenade.js')


sayHi("susan")
sayHi(name.john)
sayHi(name.peter)

console.log(name);

