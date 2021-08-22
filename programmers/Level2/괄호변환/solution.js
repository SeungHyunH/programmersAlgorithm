function solution(w) {
  if (IsCorrect(w)) { return w; }
  let u = "";
  let v = "";
  let cnt = 0;
  let flag = false;
  for (let i = 0; i < w.length; i++) {
    if (!flag) {
      u += w[i];
      cnt += (w[i] === '(') ? 1 : -1;
      if(cnt === 0){flag = true;}
    }else{
      v += w[i];
    }
  }
  if(IsCorrect(u)){
    return u+solution(v);
  }else{
    let answer = "("+solution(v)+")";
    for(let i = 1; i < u.length-1; i++){
      answer += (u[i]==='(') ? ')' : '(';
    }
    return answer;
  }
}

function IsCorrect(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    cnt += (str[i] === '(') ? 1 : -1;
    if (cnt < 0) { return false; }
  }
  return true;
}
console.log(solution("(()())()"));//"(()())()"
console.log(solution(")("));//"()"
console.log(solution("()))((()"));//"()(())()"