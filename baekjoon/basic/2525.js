const fs = require("fs");
let [a, b] = fs.readFileSync("input.txt").toString().trim().split("\n");

const start = a.split(" ").map((x) => Number(x));
const time = Number(b);

const addHour = parseInt(time / 60);
const addMin = time % 60;

//분 계산
let min =
  start[1] + addMin >= 60 ? (start[1] + addMin) % 60 : start[1] + addMin;
let hour = start[0] + addHour + parseInt((start[1] + addMin) / 60);
if (hour >= 24) hour = hour - 24;

console.log(`${hour} ${min}`);
