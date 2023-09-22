// This is a seperate module we can run alone thos file we will get all the values from the this 

const EventEmitter = require("node:events");
const emitter = new EventEmitter();
emitter.on("order-Pizza",(size,topping)=>{
    console.log(`Order Received ! Baking ${size} Pizza with ${topping} `)

})

emitter.on("order-Pizza",(size)=>{
    console.log(`Serving Complimentary Drink`)
})

emitter.emit("order-Pizza","large","Paneer")