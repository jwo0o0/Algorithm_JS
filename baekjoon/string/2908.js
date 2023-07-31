const fs = require("fs");
const [A, B] = fs.readFileSync("input.txt").toString().trim().split(" ");

const reverse_A = Number(A[2] + A[1] + A[0]);
const reverse_B = Number(B[2] + B[1] + B[0]);

if (reverse_A > reverse_B) console.log(reverse_A);
else console.log(reverse_B);
