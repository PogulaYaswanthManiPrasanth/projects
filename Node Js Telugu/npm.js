var http =  require('http');

var uc = require('upper-case');

const server = http.createServer((req,res)=>{
    res.write(uc.upperCase('hello world!!!'));
    res.end();
});

server.listen(8080);