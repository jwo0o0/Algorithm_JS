const fs = require("fs");
let [n, str] = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = str.split("").map((x) => Number(x));
const sum = arr.reduce((a, b) => a + b);

console.log(sum);
