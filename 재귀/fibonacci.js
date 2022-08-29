//재귀로 n번째 피보나치 수 구하기
//0번째는 0, 1번째는 1
//0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//버전 1.
function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//버전 2.
//시간복잡도 O(N)의 알고리즘
function fibonacci_better(n) {
    let memo = [0, 1];
    const recur = (n) => {
        if (memo[n] !== undefined) return memo[n];
        meno[n] = recur(n-1) + recur(n-2);
        return memo[n];
    }
    return recur(n);
}