const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

//console.log()를 매번 실행하면 시간이 오래걸린다.
//모든 줄에 대한 정보를 하나의 문자열에 담았다 한까번에 출력한다.

let res = "";
for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(" ");
  res += Number(a) + Number(b) + "\n";
}
console.log(res);
