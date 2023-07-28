let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");
input = input.map((x) => parseInt(x));

let sum = input.reduce((a, b) => a + b);
console.log(sum);
