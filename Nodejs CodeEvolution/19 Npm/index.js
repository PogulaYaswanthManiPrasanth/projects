const upperCase = require("upper-case").upperCase;

function greet(name) {
  console.log(upperCase(`Hey , I am ${name} Learning NodeJs `));
}
greet("Yaswanth");
module.exports = greet;
