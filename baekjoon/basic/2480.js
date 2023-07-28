const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

//방법 1) set 사용
// const mySet = new Set(input);

// let prize;
// if (mySet.size === 3) {
//   const max = input.reduce((a, b) => Math.max(a, b));
//   prize = max * 100;
// } else if (mySet.size === 2) {
//   const dup = input[0] === input[1] ? input[0] : input[2];
//   prize = 1000 + dup * 100;
// } else {
//   prize = 10000 + input[0] * 1000;
// }

// console.log(prize);

//방법 2
let a = input[0];
let b = input[1];
let c = input[2];

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if (a == b) console.log(1000 + a * 100);
else if (a == c) console.log(1000 + a * 100);
else if (b == c) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);
