# JavaScript 정렬 라이브러리

- JavaScript에서는 배열에 포함된 데이터를 정렬하는 `sort()` 함수를 제공
- 최악의 경우 시간 복잡도 O(NlogN) 보장
- 코딩 테스트에서는 가능하다면 `sort()` 함수를 사용하는 것을 권장

```javascript
arr.sort(compareFunction);
```

- `compareFunction`: 정렬 기준을 정해주는 함수
  - 두 개의 원소 a, b를 입력 받는다.
  - 반환 값이 0보다 작은 경우 -> a가 앞에 위치
  - 반환 값이 0보다 큰 경우 -> b가 앞에 위치
  - 반환 값이 0인 경우 -> 순서 변경 X

* compareFunction을 사용하지 않으면 각 원소가 문자열로 취급되어 유니코드 값 순서대로 정렬된다.

```javascript
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

//오름차순 정렬
arr.sort((a, b) => a - b);

//내림차순 정렬
arr.sort((a, b) => b - a);
```
