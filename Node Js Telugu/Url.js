const { parse } = require('path');
var url = require('url');

var adrs = 'https://localhost:8080/home.html?month=Nov&&year=2022'

var q = url.parse(adrs,true)

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
