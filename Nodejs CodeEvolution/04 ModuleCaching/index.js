const superHero = require('./superHero');
console.log(superHero.getName());

superHero.setName("SuperMan");
console.log(superHero.getName())

const newSuperHero = require('./superHero');
/*  If you see here If we are creting new instance and that  module wont take new instance 
 here giving result again superman 
Module caching comes into picture  while debugging the code it wont execute the line 7 
directly jumps into log function in line 11 */ 
console.log(newSuperHero.getName());

