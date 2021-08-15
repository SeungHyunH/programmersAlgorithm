function solution(A, B) {
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);
  let answer = 0;
  for(let i = 0; i < A.length; i++){
    answer+=A[i]*B[i];
  }
  return answer;
}

function solution2(A, B) {
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);
  return A.reduce((acc,cur,idx)=>acc+cur*B[idx],0);
}

console.log(solution([1, 4, 2],[5, 4, 4]));//29
console.log(solution([1,2],[3,4]));//10