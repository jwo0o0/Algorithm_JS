//선택 정렬

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    //swap
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
}
