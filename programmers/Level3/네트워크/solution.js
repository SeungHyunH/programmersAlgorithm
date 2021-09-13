function solution(n, computers) {
  var answer = 0;
  const visited = Array.from(Array(n),()=>false);
  for(let i = 0; i < n; i++){
    if(!visited[i]){
      let pq = [i];
      while(pq.length){
        let cur = pq.shift();
        for(let j = 0; j < computers[cur].length; j++){
          if(cur===j){continue;}
          if(computers[cur][j]===1&&!visited[j]){
            visited[j]=true;
            pq.push(j);
          }
        }
      }
      answer++;
    }
  }
  return answer;
}

console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]));//2
console.log(solution(3,[[1, 1, 0], [1, 1, 1], [0, 1, 1]]));//1