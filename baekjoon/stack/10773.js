const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] === "0") stack.pop();
  else {
    stack.push(Number(input[i]));
  }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
