function solution(N, stages) {
  let answer = [];
  for(let i = 1; i <= N; i++){
    let total = stages.filter(stage => stage >= i).length;
    let cur = stages.filter(stage=>stage === i).length;
    if(cur === 0){answer.push({stage : i, failRate : 0});}
    else{answer.push({stage:i,failRate:cur/total});}
  }
  return answer.sort((a,b)=>(a.failRate === b.failRate) ? a.stage - b.stage : b.failRate - a.failRate).map(el=>el.stage);
}

let result = solution(5,[2, 1, 2, 6, 2, 4, 3, 3]);
console.log(result);//[3,4,2,1,5]
result = solution(4,[4,4,4,4,4]);
console.log(result);//[4,1,2,3]