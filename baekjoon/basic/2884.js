const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");
input = input.map((x) => Number(x));

//분 계산
let min = input[1] - 45 < 0 ? input[1] + 15 : input[1] - 45;

//시 계산
let hour = input[0];
if (input[1] - 45 < 0) {
  hour = input[0] === 0 ? 23 : input[0] - 1;
}

console.log(hour + " " + min);
