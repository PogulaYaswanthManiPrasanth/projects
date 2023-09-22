const fs = require("node:fs");
const readeableStream  = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:10
})
const writeableStream = fs.createWriteStream("./file2.txt");

readeableStream.pipe(writeableStream);

// readeableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk);
// });