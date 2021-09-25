function solution(n) {
  var answer = 0;
  const dp = Array(n).fill(0);
  dp[0]=1;
  dp[1]=1;
  for(let i = 0; i < n-1; i++){
    if(i+1<=n-1){dp[i+1] = (dp[i+1]+dp[i])%1234567};
    if(i+2<=n-1){dp[i+2] = (dp[i+2]+dp[i])%1234567};
  }
  return dp[n-1]%1234567;
}

console.log(solution(4));//5
console.log(solution(3));//3
console.log(solution(30));//111702 