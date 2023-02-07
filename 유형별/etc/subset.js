//Problem
//base, sample 배열을 입력 받아 sample이 base의 부분집합인지 여부를 리턴
//base, sample: number 타입을 요소로 갖는 중복이 없는 배열
//리턴 값: boolean

//버전 1.
const isSubsetOf = (base, sample) => {
    for (let i = 0; i < sample.length; i++) {
        if (!base.includes(sample[i])) {
            return false
        }
    }
    return true
}

//버전 2.
const isSubsetOf_better = (base, sample) => {
    //arr의 idx번째 요소부터 find를 찾음
    const findFromIdx = (find, idx, arr) => {
        for (let i = idx; i < arr.length; i++) {
            if (find === arr[i]) return i;
            else if (find < arr[i]) return -1;
        }
        return -1;
    }

    //우선 base, sample 배열을 정렬
    //유니코드순이 아니라 크기순으로
    base = base.sort((a, b) => a - b);
    sample = sample.sort((a, b) => a - b);

    let idx = 0;
    for (let i = 0; i < sample.length; i++) {
        idx = findFromIdx(sample[i], idx, base);
        if (idx === -1) return false
    }
    return true
}
