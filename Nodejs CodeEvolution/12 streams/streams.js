//sending file.txt content to the file2.txt using createReadStream and ceateWriteStream

const fs = require("node:fs");
const readeableStream  = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:10
})
const writeableStream = fs.createWriteStream("./file2.txt");
readeableStream.on("data",(chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);
});