const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //콘솔 창에서 enter를 입력할 때마다 호출
  input.push(line);
}).on("close", function () {
  //콘솔 창에서 cmd+c 혹은 cmd+d를 입력하면 호출
  console.log(input);
  process.exit();
});
