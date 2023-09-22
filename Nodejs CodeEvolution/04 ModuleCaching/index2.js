const superHero2 = require('./superHero2');

const Batman2 = new superHero2("Batman");
console.log(Batman2.getName());

Batman2.setName("SuperMan");
console.log(Batman2.getName());

/* In this module we are creaitng new instance for the here we will get expected ouput 
because in the module.exports = SuperHero2 
given direct function to module.exports 
*/
const superHero3 = new superHero2("SpiderMan");
console.log(superHero3.getName())

