const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const n = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
