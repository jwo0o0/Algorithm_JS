const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const n = Number(input);

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "*";
  }
  console.log(line);
  line = "";
}
