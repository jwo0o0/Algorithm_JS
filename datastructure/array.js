//배열

//1차원 배열 초기화
let arr1 = Array.from({ length: 5 }, () => 7);

//2차원 배열 초기화
let arr2 = Array.from(Array(4), () => new Array(5));
//4X5 배열

let arr3 = new Array(3);
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = Array.from({ length: 4 }, (undefined, j) => i * 4 + j);
}
