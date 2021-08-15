function solution(s, n) {
  let answer = '';
  s.split('').forEach(str => answer+=transString(str,n));
  return answer;
}

function transString(str,n){
  let strCode = str.charCodeAt(0);
  if(97<=strCode&& strCode<=122){//a~z
    return strCode+n>122 ? String.fromCharCode((strCode+n)%122+96) : String.fromCharCode(strCode+n);//Z값보다 커지는 값과 아닌것들을 나누어 처리
  }
  else if(65<=strCode && strCode<=90){//A~Z
    return strCode+n>90 ? String.fromCharCode((strCode+n)%90+64) : String.fromCharCode(strCode+n); //Z값보다 커지는 값과 아닌것들을 나누어 처리
  }
  else{return str;}//영어가 아닌 문자는 그대로 리턴
}

let result = solution("AB", 1);
console.log(result);//"BC"
result = solution("z", 1);
console.log(result);//"a"
result = solution("a B z", 4);
console.log(result);//"e F d"