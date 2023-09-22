
// always use module.exports module when exporting a module
const add = (x,y)=>{
return x + y;
}
const sub = (x,y)=>{
    return x -y ;
}
module.exports = {
    add,
    sub
}

/* exports.add = (x,y)=>{
return x + y;
}
exports.sub = (x,y)=>{
    return x -y ;
} */
