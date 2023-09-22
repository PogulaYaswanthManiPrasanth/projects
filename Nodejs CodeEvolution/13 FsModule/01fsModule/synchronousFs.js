const { readFileSync } = require("node:fs");
const fs = require("node:fs");
console.log("First")
const fileContent = readFileSync("./file.txt","utf-8");

console.log(fileContent);

console.log("Second");