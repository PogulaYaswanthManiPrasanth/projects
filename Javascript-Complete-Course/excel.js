const xlsx = require("xlsx");
const fs = require('fs');
// Read the data from the Excel and store it in the form of JSON

// Step:1-----> Read the Excel file
const workBook = xlsx.readFile('./CELADON.xlsx')
// console.log(workBook.SheetNames);

// Read sheet from the Workbook

const workSheet = workBook.Sheets['ACCT-ADDRESS']
// console.log(workSheet);
// Read Sheet data and convert into JSON
const data = xlsx.utils.sheet_to_json(workSheet);
console.log(data);




