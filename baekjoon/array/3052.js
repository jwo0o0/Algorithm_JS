const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = input.map((x) => Number(x));

const mySet = new Set();

arr.forEach((x) => {
  mySet.add(x % 42);
});

console.log(mySet.size);
