(function(){

const superHero = "Batman";
console.log(superHero);

})();
// Immediately Invoked Function Expression 

//  Each loaded with the module in NodeJs is wrapped with IIFE and provide private scoping of code

// IIFE allows you to repeat variables or function names without any conflict

(function(){

const superHero = "Superman";
console.log(superHero);

})();

