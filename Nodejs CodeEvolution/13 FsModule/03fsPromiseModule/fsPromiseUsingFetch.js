const fs = require("node:fs/promises");

console.log("First");
fs.readFile("file.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log("Second");


