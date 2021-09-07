function solution(weights, head2head) {
  const answer = Array.apply(null,Array(weights.length)).map((_,idx)=>idx+1);
  const info = [];
  head2head.forEach((rate,idx)=>{
    let total = 0;//총경기수
    let win = 0;//승리횟수
    let overWin = 0;//몸무게 큰사람 이긴횟수
    for(let i =0; i < rate.length; i++){
      if(rate[i]!=='N'){
        total++;
        if(rate[i]==='W'){
          win++;
          if(weights[idx]<weights[i]){
            overWin++;
          }
        }
      }
    }
    info.push([(total===0) ? 0 : win/total,overWin]);
  });
  return answer.sort((a,b)=>{
    if(info[a-1][0]>info[b-1][0]){return -1;}//승률
    else if(info[a-1][0]<info[b-1][0]){return 1;}
    else{
      if(info[a-1][1]>info[b-1][1]){return -1;}//몸무게가 큰사람 이긴 횟수
      else if(info[a-1][1]<info[b-1][1]){return 1;}
      else{
        if(weights[a-1]>weights[b-1]){return -1;}//몸무게 큰 사람
        else if(weights[a-1]<weights[b-1]){return 1;}
        else{
          return a-b;//번호순
        }
      }
    }
  });
}

console.log(solution([50,82,75,120],["NLWL","WNLL","LWNW","WWLN"]));//[3,4,1,2]
console.log(solution([145,92,86],["NLW","WNL","LWN"]));//[2,3,1]
console.log(solution([60,70,60],["NNN","NNN","NNN"]));//[2,1,3]