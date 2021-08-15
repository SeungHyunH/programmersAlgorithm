function solution(s) {
  return (s.length===4||s.length===6)&&(s.match(/\D/g)===null);
}

let result = solution("a234");
console.log(result);//false
result = solution("1234");
console.log(result);//tru
result = solution("12e3");
console.log(result);//false