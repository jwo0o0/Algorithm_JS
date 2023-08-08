//삽입 정렬
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else { //자기보다 작은 데이터를 만나면 멈춤
        break;
      }
    }
  }
}
