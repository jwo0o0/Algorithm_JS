//병합 정렬
//left ~ mid = 분할된 배열 1
//mid +1 ~ right = 분할된 배열 2
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; //결과 배열의 인덱스
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  //왼쪽 배열의 처리가 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  }
  //오른쪽 배열의 처리가 끝난 경우
  else {
    for (; j <= mid; i++) sorted[k++] = arr[i];
  }
  //정렬된 배열 결과를 원본 배열에 반영
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
