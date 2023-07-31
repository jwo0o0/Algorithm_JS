const fs = require("fs");
let [n, input] = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(n);
const arr = input.split(" ").map((x) => Number(x));

//방법 1)
// const max = arr.reduce((a, b) => Math.max(a, b));
// const min = arr.reduce((a, b) => Math.min(a, b));

// console.log(min, max);

//방법 2)
let min = 1000001;
let max = -1000001;
for (let i = 0; i < N; i++) {
  if (arr[i] < min) min = arr[i];
  if (arr[i] > max) max = arr[i];
}

console.log(min, max);
