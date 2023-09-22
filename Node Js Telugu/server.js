var http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Hello World!!');
    //res.write(req.url);
    //url = http://localhost:8080/items or http://localhost:8080/products
    res.end();
    console.log("server running...")

})
server.listen(8080);