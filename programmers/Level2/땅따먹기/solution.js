function solution(land) {
  let answer = 0;
  let dp = [0,0,0,0];
  for(let i = 0; i < land.length; i++){
    let temp = [...dp];
    dp[0] = Math.max(dp[0],land[i][0]+Math.max(temp[1],temp[2],temp[3]));
    dp[1] = Math.max(dp[1],land[i][1]+Math.max(temp[0],temp[2],temp[3]));
    dp[2] = Math.max(dp[2],land[i][2]+Math.max(temp[0],temp[1],temp[3]));
    dp[3] = Math.max(dp[3],land[i][3]+Math.max(temp[0],temp[1],temp[2]));
  }
  return Math.max(...dp);
}

function solution2(land) {
  let answer = 0;
  let dp = [0,0,0,0];
  for(let i = 0; i < land.length; i++){
    let temp = [...dp];
    for(let j = 0; j < 4; j++){
      dp[j] = Math.max(dp[j],
        land[i][j]+Math.max(...temp.filter((val,idx)=>idx!==j))
      );
    }
  }
  return Math.max(...dp);
}


console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));//16