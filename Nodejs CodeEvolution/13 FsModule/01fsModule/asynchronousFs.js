const fs = require("node:fs");
console.log("First")
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);

    }
    else{
        console.log(data);
    }
});
console.log("Second");
