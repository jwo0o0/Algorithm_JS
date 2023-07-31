const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const arr = input.map((x) => Number(x));

let max = -1;
let idx = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    idx = i;
  }
}

console.log(max + "\n" + (idx + 1));
