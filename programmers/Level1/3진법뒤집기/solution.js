function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''),3);
}
let result = solution(45);
console.log(result);//7
result = solution(125);
console.log(result);//229