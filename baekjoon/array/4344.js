const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const N = Number(input[0]);

const res = [];

for (let i = 1; i <= N; i++) {
  let arr = input[i].split(" ").map(Number);
  arr.splice(0, 1);
  let avg = arr.reduce((a, b) => a + b) / arr.length;
  let cnt = 0;
  arr.map((x) => {
    if (x > avg) cnt++;
  });
  res.push((cnt / arr.length) * 100);
}

res.forEach((x) => {
  console.log(`${x.toFixed(3)}%`);
});
