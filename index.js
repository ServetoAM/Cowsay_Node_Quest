let id = require(`./information.js`)

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : id.name + id.campus,
    e : "oO",
    T : "U "
}));