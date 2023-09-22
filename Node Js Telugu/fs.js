var http = require('http');
var fs = require('fs');

const server = http.createServer((req,res)=>{

        fs.readFile('text.txt',(err,data)=>{
        res.write(data);
        res.end();
    })

    
});
 server.listen(8080);

/* Append or add the text extra to the given text we are using appendFile() Method
 
    fs.appendFile('text.txt','Thankyou',(err,data)=>{
        res.write(data);
        res.end();
    })
    
    */

/* writeFile is used override the current text to given text by us

    fs.writeFile('text.txt','Nodejs',(err,data)=>{
        res.write(data);
        res.end();
    })

*/

/* unLink is used to delete file in the ex: text.txt

fs.unLink('text.txt',(err)=>{
    if (err) throw err;
    console.log("File Deleted");
})

*/
