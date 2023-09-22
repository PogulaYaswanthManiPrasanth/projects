(function(message){

const superHero = "Batman";
console.log(message,superHero);

})("Hello form ");
// Immediately Invoked Function Expression 

//  Each loaded with the module in NodeJs is wrapped with IIFE and provide private scoping of code

// IIFE allows you to repeat variables or function names without any conflict

(function(message){

const superHero = "Superman";
console.log(message,superHero);

})("Hello from ");


/* **************************************************** */

/* (function(exports,require,module,__fileName,__dirName){
    const Hero = "Ishanth";
    console.log(Hero)
}) */

/* **************************************************** */

