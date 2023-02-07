//버블 정렬

// 풀이 1.
const swap = function (idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
function Bublblesort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // 더 큰 요소가 뒤에 있으면 swap
            if (arr[j] > arr[j+1]) swap(j, j+1, arr);
        }
    }
    return arr;
}

// 풀이 2. 시간복잡도에서 더 나은 버전
function Bublblesort_better(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(j, j+1, arr);
                swapped = true;
            }
        }
        // swapped 되지 않았으면 이미 정렬되어있으므로 반복하며 더 비교할 필요가 없음. 
        if (!swapped) break;
    }
    return arr;
}