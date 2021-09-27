function solution(n, s) {
  const answer = [];
  if(n>s){return [-1];}
  while(n>0){
    const cur = Math.floor(s/n--);
    if(cur === 0){return [-1];}
    answer.push(cur);
    s-=cur;
  }
  return answer;
}

console.log(solution(2,9));//[4, 5]
console.log(solution(2,1));//[-1]
console.log(solution(2,8));//[4, 4]
console.log(solution(4,9));//[2,2,2,3]