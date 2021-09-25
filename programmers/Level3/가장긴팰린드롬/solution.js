function solution(s) {
  const makeODD = (str) => {
    let temp = '#';
    for (let i = 0; i < str.length; i++) {
      temp += str[i] + '#';
    }
    return temp;
  }
  s = makeODD(s);
  const n = s.length;
  let answer = 0;
  for(let i = 0; i < n; i++){
    let temp = 0;
    while(0<=i-temp-1 && i+temp+1<n && s[i-temp-1]===s[i+temp+1]){
      temp++;
    }
    answer = Math.max(answer,temp);
  }
  return answer;
}

console.log(solution("abcdcba"));//7
console.log(solution("abacde"));//3
console.log(solution("abba"));//4