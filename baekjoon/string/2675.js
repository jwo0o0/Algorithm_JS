const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const res = [];

input.slice(1, N + 1).forEach((x) => {
  const [R, S] = x.split(" ");
  let str = "";
  for (let i = 0; i < S.length; i++) {
    str += S[i].repeat(R);
  }
  res.push(str);
});

res.forEach((x) => console.log(x));
