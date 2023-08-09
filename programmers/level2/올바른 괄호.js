function solution(s) {
  var answer = true;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      if (stack.pop() !== "(") answer = false;
    }
  }
  if (stack.length !== 0) answer = false;

  return answer;
}
