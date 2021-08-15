function solution(n)
{
  let answer = 0;
  while(n >= 10){
    let temp = n%10;
    answer+=temp;
    n = (n-temp)/10;
  }
  answer += n;
  return answer;
}

let result = solution(100);
console.log(result);//6
result = solution(987);
console.log(result);//24