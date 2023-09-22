/* import add from './math.mjs';

console.log(add(4,7)); */


/* import  math from './math.mjs'

const {add,sub} = math;

console.log(add(2,8));
console.log(sub(4,9)) */

// Here two ways os importing the module from the math.mjs method while we are using two functions 


/*  import * as math from './math.mjs' --------------> 1st way of importing
const {add,sub} = math;

console.log(add(2,8));
console.log(sub(4,9)) */

import {add,sub} from './math.mjs'



console.log(add(2,8));
console.log(sub(4,9))


