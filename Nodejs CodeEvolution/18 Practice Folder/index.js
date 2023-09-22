process.nextTick(()=>{
    console.log("NextTick 1");
})

process.nextTick(()=>{
    console.log("NextTick 2");

    process.nextTick(()=>{
    console.log("Inside NextTick 2");
})
})

process.nextTick(()=>{
    console.log("NextTick 3");
})


Promise.resolve().then(()=>{
    console.log("Promise 1");

})
Promise.resolve().then(()=>{
    console.log("Promise 2");

    process.nextTick(()=>{
    console.log("Inside promise 2  NextTick ");
})


})

Promise.resolve().then(()=>{
    console.log("Promise 3");

})

setTimeout(()=>{
console.log("Set Timeout 1")
},0);

setTimeout(()=>{
console.log("Set Timeout 2")

    process.nextTick(()=>{
    console.log("Inside setTimeout NextTick ");
})

},0);

setTimeout(()=>{
console.log("Set Timeout 3")
},0);


