function solution(n, a, b) {
  let cnt = 0;
  function tournament(participant){
    cnt++;
    let winner = [];
    for(let i = 0; i < participant.length/2; i++){
      if((participant[i*2]===a&&participant[i*2+1]===b)||(participant[i*2]===b&&participant[i*2+1]===a)){
        return;
      }
      if(participant[i*2]===a ||participant[i*2+1]===a){
        winner.push(a);
      }else if(participant[i*2]===b ||participant[i*2+1]===b){
        winner.push(b);
      }else{
        winner.push(participant[i*2]);
      }
    }
    tournament(winner);
  };
  let temp = [];
  for(let i = 1 ; i <= n; i++){temp.push(i);}
  tournament(temp);
  return cnt;
}

function solution(n, a, b) {
  let cnt = 0;
  while(a !== b){
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    cnt++;
  }
  return cnt;
}
console.log(solution(8, 4, 7));//3