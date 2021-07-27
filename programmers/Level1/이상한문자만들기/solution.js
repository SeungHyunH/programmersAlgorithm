function solution(s) {
  let answer = '';
  let cnt = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i-1]===' '){cnt = 0;}
    answer += (cnt++%2 === 0) ? s[i].toUpperCase() : s[i].toLowerCase();
  }
  return answer;
}

let result = solution("try hello world");
console.log(result);//"TrY HeLlO WoRlD"