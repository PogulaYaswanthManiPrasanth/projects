// const path = require("node:path");
const path = require("path");

console.log(__filename);
console.log(__dirname);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));


// extname
console.log(path.extname(__filename));
console.log(path.extname(__dirname));


// parse
console.log(path.parse(__filename));
console.log("********************************************");

// format
console.log(path.format(path.parse(__filename)));

// isAbsolute
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'));

// Join Method 
console.log(path.join("folder1","folder2","index.html"));
console.log(path.join("/folder1","folder2","index.html"));
console.log(path.join("/folder1","//folder2","index.html"));
console.log(path.join("folder1","folder2","../index.html"));


console.log("********************************************");

// resolve
console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("folder1","folder2","../index.html"));


