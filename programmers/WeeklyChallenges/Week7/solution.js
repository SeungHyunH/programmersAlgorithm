function solution(enter, leave) {
  const n = enter.length;
  const answer = Array.from(Array(n),()=>0);
  const queue = [];
  let enIdx = 0;
  let leIdx = 0;
  while(enIdx < n || leIdx < n){
    const next_leave = leave[leIdx];
    const next_enter = enter[enIdx];
    const next_leve_idx = queue.indexOf(next_leave);
    if(next_leve_idx===-1){
      queue.push(next_enter);
      enIdx++;
    }else{
      queue.splice(next_leve_idx,1);
      if(queue.length){
        answer[next_leave-1]+=queue.length;
        queue.forEach(p=>answer[p-1]++);
      }
      leIdx++;
    }
  }
  return answer;
}

console.log(solution([1,3,2],[1,2,3]));//	[0,1,1]
console.log(solution([1,4,2,3],[2,1,3,4]));//[2,2,1,3]
console.log(solution([3,2,1],[2,1,3]));//[1,1,2]
console.log(solution([3,2,1],[1,3,2]));//[2,2,2]
console.log(solution([1,4,2,3],[2,1,4,3]));//[2,2,0,2]