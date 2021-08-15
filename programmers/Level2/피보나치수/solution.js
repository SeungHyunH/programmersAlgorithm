function solution(n) {
  var answer = 1;
  let left = 0;
  let right = 1;
  for(let i = 2; i <= n; i++){
    answer = (left+right)%1234567;
    left = right;
    right = answer;
  }
  return answer;
}

console.log(solution(5));//2
console.log(solution(4));//5