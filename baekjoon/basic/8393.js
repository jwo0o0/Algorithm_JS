const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

//1 <= n <= 10,000

//방법 1)
// const n = Number(input);
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//방법 2) 등차수열 공식
const n = Number(input);
console.log((n * (n + 1)) / 2);
