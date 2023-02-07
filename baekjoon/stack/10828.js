const fs = require("fs");
//const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const stack = [];
const result = [];

for (let i = 1; i < input.length; i++) {
  switch (input[i]) {
    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "pop":
      result.push(stack.pop() || -1);
      break;
    default:
      //push
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
