function solution(n) {
  let pattern = '수박';
  let answer = '';
  for(let i = 0; i < n; i++){
    answer+=pattern[i%2];
  }
  return answer;
}

let result = solution(3);
console.log(result);//"수박수"
result = solution(4);
console.log(result);//"수박수박"