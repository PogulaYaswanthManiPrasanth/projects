function greet(name){
    console.log(`hello ${name}`)
}

function greetYaswanth(greetFn){
    const name = "Yaswanth";
    greetFn(name)
}
greetYaswanth(greet);

// This is the Exact call back fuction

function greet(name){
    console.log(`hello ${name}`)
}

function higherOrderFunction(callBack){
    const name = "Yaswanth";
    callBack(name)
}
greetYaswanth(greet);
