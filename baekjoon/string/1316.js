//그룹 단어 체커
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [n, ...arr] = input;

let cnt = 0;
arr.forEach((x) => {
  let mySet = new Set();
  mySet.add(x[0]);
  let res = true;
  for (let i = 1; i < x.length; i++) {
    if (mySet.has(x[i]) && x[i - 1] != x[i]) {
      res = false;
      break;
    } else {
      mySet.add(x[i]);
    }
  }
  if (res) cnt++;
});

console.log(cnt);
