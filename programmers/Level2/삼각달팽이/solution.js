function solution(n) {
  const answer = Array(n).fill().map((_,i)=>Array(i+1));

  let x = -1;
  let y = 0;
  let cnt = 0;
  while(n>0){
    for(let i = 0; i < n; i++){answer[++x][y]=++cnt;}
    n--;
    for(let i = 0; i < n; i++){answer[x][++y]=++cnt;}
    n--;
    for(let i = 0; i < n; i++){answer[--x][--y]=++cnt;}
    n--;
  }
  return answer.flat();
}

console.log(solution(4));//[1,2,9,3,10,8,4,5,6,7]
console.log(solution(5));//[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6));//[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]