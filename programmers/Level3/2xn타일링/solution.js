function solution(n) {
  if(n === 1){return 1;}
  let n1 = 1;
  let n2 = 2;
  for(let i = 3; i <= n; i++){
    let tmp = (n1+n2)%1000000007;
    n1 = n2;
    n2 = tmp;
  }
  return n2;
}

console.log(solution(4));//5
console.log(solution(5));//8
console.log(solution(6));//13