const http = require("node:http");
const person = {
    firstName:"Yaswanth",
    lastName:"ManiPrasanth"
}
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify(person));
    // console.log(req)
});

server.listen(3000,()=>{
    console.log("server running on port 3000")
})