function solution(n, s, a, b, fares) {
  const INF = n*100001;
  let answer = n*(n-1)*INF/2;
  const dp = Array.from(Array(n+1),()=>Array(n+1).fill(INF));
  fares.forEach(([a,b,c])=>{
    dp[a][b]=c;
    dp[b][a]=c;
  });
  for(let k = 1; k<= n; k++){
    for(let i = 1; i <= n; i++){
      if(k===i){dp[k][i]=0;}
      for(let j = 1; j <= n; j++){
        if(dp[i][j]>dp[i][k]+dp[k][j]){
          dp[i][j]=dp[i][k]+dp[k][j];
        }
      }
    }
  }
  for(let i = 1; i <= n; i++){
    let cur = dp[s][i]+dp[i][a]+dp[i][b];
    answer = Math.min(cur,answer);
  }
  return answer;
}

console.log(solution(6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]));//	82
console.log(solution(7, 3, 4, 1, [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]));//14
console.log(solution(6, 4, 5, 6, [[2, 6, 6], [6, 3, 7], [4, 6, 7], [6, 5, 11], [2, 5, 12], [5, 3, 20], [2, 4, 8], [4, 3, 9]]));//18