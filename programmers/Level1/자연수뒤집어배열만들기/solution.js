function solution(n) {
  var answer = [];
  while(n>=10){
    answer.push(n%10);
    n = Math.floor(n/10);
  }
  answer.push(n%10);
  return answer;
}

function solution2(n) {
  return (n+'').split('').reverse().map(v=>parseInt(v));
}

let result = solution(12345);
console.log(result);//[5,4,3,2,1];
result = solution2(12345);
console.log(result);//[5,4,3,2,1];