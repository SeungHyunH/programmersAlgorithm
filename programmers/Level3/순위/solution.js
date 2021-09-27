function solution(n, results) {
  let answer = 0;
  const arr = Array.from(Array(n+1),()=>Array.from(Array(n+1),()=>false));
  results.forEach(([a,b])=>arr[a][b]=true);
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
      for(let k = 1; k <= n; k++){
        if(arr[j][i]&&arr[i][k]){arr[j][k]=true;}
      }
    }
  }
  for(let i = 1; i <= n; i++){
    let cnt = 0;
    for(let j = 1; j <= n; j++){
      if(arr[i][j]||arr[j][i]){cnt++;}
    }
    if(cnt === n-1){answer++;}
  }
  return answer;
}

console.log(solution(5,[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]	));//2
console.log(solution(5, [[1, 4], [4, 2], [2, 5], [5, 3]]));//5