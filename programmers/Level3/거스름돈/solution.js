function solution(n, money) {
  let answer = 0;
  money.sort((a,b)=>b-a);
  const dfs = (total,idx)=>{
    if(total===0||(idx === money.length-1 && total%money[idx]===0)){
      answer = (answer+1)%1000000007;
      return;
    }
    const cur = Math.floor(total/money[idx]);
    for(let i = 0; i <= cur; i++){
      dfs(total-money[idx]*i,idx+1);
    }
  }
  dfs(n,0);
  return answer;
}

function solution(n, money) {
  let answer = 0;
  const dp = Array(n+1).fill(0);
  dp[0]=1;
  money.forEach(el=>{
    for(let i = el; i <= n; i++){
      dp[i]+=dp[i-el];
    }
  });
  return dp[n]%1000000007;
}

console.log(solution(5,[5,2,1]));//4