const fs = require("fs");
let [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(n);
const arr = input.split(" ").map(Number);
const M = arr.reduce((a, b) => Math.max(a, b));

const newArr = arr.map((x) => {
  return (x / M) * 100;
});

const sum = newArr.reduce((a, b) => a + b);
console.log(sum / N);
