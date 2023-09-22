const fs = require("fs");

setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
  setImmediate(() => {
    console.log("Hey! I am From set Immediate call back");

    process.nextTick(() =>
      console.log("this is inner process.nextTick inside readFile")
    );
    Promise.resolve().then(() =>
      console.log("this is inner Promise.resolve inside readFile")
    );
  });
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setImmediate(() => {
//   console.log("Hey! I am From set Immediate call back");
// });
for (let i = 0; i < 1000000000; i++) {}
