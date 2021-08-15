function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; sum < n; j++) {
      sum += j;
    }
    if (sum === n) { answer++; }
  }
  return answer;
}

function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1)
      answer++
  }
  return answer;
}

console.log(solution(15));//4