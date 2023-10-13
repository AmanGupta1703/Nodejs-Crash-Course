const path = require("path");

console.log(path.basename(__filename)); // app.js
console.log(path.dirname(__filename)); // 04-Path-Module
console.log(path.extname(__filename)); // .js

console.log(path.join(__dirname, "test", "index.html")); // 04-Path-Module\test\index.html