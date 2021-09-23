function solution(n) {
  let answer = 0;
  /*
  이전 퀸의 좌표(y,x) = j,queen[j]
  현재 퀸의 좌표(y,x) = queen.length,i
  대각선판단 : 현재 퀸 y좌표-이전 퀸들의 y좌표 = 현재 퀸 x좌표 - 이전 퀸들의 x좌표
  */ 
  const dfs = (queen,cnt) =>{
    if(cnt === n){answer++;return;}
    for(let i = 0; i < n; i++){
      let flag = false;
      for(let j = 0; j < queen.length; j++){
        if(i === queen[j]){flag=true;break;}//세로 검사
        if(queen[j]+queen.length-j===i){flag=true;break;}//오른쪽대각선
        if(queen[j]-(queen.length-j)===i){flag=true;break;}//왼쪽대각선
      }
      if(flag){continue;}
      dfs([...queen,i],cnt+1);
    }
  };
  dfs([],0);
  return answer;
}

console.log(solution(4)); 2
console.log(solution(8));