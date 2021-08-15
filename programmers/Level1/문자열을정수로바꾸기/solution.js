function solution(s) {
  return s.match(/[0-9]/g).join('') * (/\-/.test(s) ? -1:1);
}
function solution2(s) {
  return +s;
}
let result = solution("1234");
console.log(result);
result = solution("-1234");
console.log(result);

result = solution2("1234");
console.log(result);
result = solution2("-1234");
console.log(result);