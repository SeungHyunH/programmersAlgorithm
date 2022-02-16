function solution(n) {//완전탐색(내가 푼 방법)
  var answer = 0;
  function DFS(cur,cnt){
    if(cnt<0){return;}
    if(cur.length>=2*n){
      if(cnt===0){answer+=1;}
      return;
    }
    DFS(cur+'(',cnt+1);
    DFS(cur+')',cnt-1);
  }
  DFS('(',1);
  return answer;
}

function solution(n) {//DP
    const DP = Array(15).fill(0);
    DP[0] = 1;
    DP[1] = 1;

    for (let i = 2; i <= 14; i++) {
        for (let j = 1; j <= i; j++) {
            DP[i] += DP[i - j] * DP[j - 1];
        }
    }

    console.log(DP);

    return DP[n];
}

function solution(n){//카탈란수
  if(n <= 1){return 1;}
  let x = 1, y = 1;
  for(let i = 2; i <= n; i++){
    x*=i;
    y*=n+i;
  }
  return Math.floor(y/x);
}

console.log(solution(2));//2
console.log(solution(3));//5