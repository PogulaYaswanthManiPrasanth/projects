const fs =  require ("node:fs");
fs.writeFile("./greeting.txt","--------Hi there! I am from Append File",{flag:'a'},(err)=>{
    if(err){
    console.log(err);
    }else{
        console.log("File Written successfully")
    }

});