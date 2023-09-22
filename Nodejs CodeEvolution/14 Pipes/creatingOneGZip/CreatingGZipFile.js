const fs = require("node:fs");
const zlib = require("node:zlib");
const gzip = zlib.createGzip();

const readeableStream  = fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:10
})
readeableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt"));
const writeableStream = fs.createWriteStream("./file2.txt");
readeableStream.pipe(writeableStream);
