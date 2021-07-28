function solution(n) {
    let numbers = ['1','2','4'];
    let answer = '';
    n--;
    while(n>=3){
      answer = numbers[n%3]+answer;
      n = Math.floor(n/3)-1;
    }
    answer = numbers[n]+answer;
    return answer;
}

for(let i = 1; i < 50; i++){
  let result = solution(i);
  console.log(result);
}