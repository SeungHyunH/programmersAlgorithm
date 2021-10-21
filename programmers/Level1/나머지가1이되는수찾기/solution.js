function solution(n) {
  let answer;
  for (answer = 2; n % answer !== 1; answer++) { }
  return answer;
}

console.log(solution(10));//3
console.log(solution(12));//11