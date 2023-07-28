let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// let res = [];

// res.push(parseInt(input[0]) * parseInt(input[1][2]));
// res.push(parseInt(input[0]) * parseInt(input[1][1]));
// res.push(parseInt(input[0]) * parseInt(input[1][0]));
// res.push(parseInt(input[0]) * parseInt(input[1]));

// res.map((x) => console.log(x));

console.log(input);

let a = input[0];
let b = input[1];

x_1 = b[2];
x_2 = b[1];
x_3 = b[0];

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * b);
