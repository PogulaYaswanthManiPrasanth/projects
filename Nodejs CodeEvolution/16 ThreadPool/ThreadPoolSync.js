const crypto = require("node:crypto");

const start = Date.now();

crypto.pbkdf2Sync("password","salt",100000,512,"sha512");      //771
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");   // 1560
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");   //2297
console.log("Hash:",Date.now()-start);



/* Here main thread is blocking while running with sync methods  */