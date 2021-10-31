function solution(a) {
  const N = a.length;
  const dp = Array.from(Array(N),()=>Array(2));
  let answer = 1;
  dp[N-1][1]=a[N-1];
  dp[0][0]=a[0];
  for(let i = N-2; i>=0; i--){
    dp[i][1]=Math.min(dp[i+1][1],a[i+1]);
  }
  for(let i = 1; i <= N-1; i++){
    dp[i][0]=Math.min(dp[i-1][0],a[i-1]);
    if(dp[i][0]<a[i]&&dp[i][1]<a[i]){continue;}
    answer++;
  }
  return answer;
}

console.log(solution([9,-1,-5]));//3
console.log(solution([-16,27,65,-2,58,-92,-71,-68,-61,-33]));//6