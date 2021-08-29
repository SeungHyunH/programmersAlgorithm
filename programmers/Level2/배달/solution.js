function solution(N, road, K) {
  //플로이드 와샬
  const INF = 123456789;
  let town = [[]];
  for(let i = 1; i <= N; i++){
    let temp = [];
    for(let j = 0; j <= N; j++){
      temp.push((i === j) ? 0 : INF);
    }
    town.push(temp);
  }
  road.forEach(r =>{
    town[r[0]][r[1]]=Math.min(town[r[0]][r[1]],r[2]);
    town[r[1]][r[0]]=Math.min(town[r[1]][r[0]],r[2]);
  });

  for(let mid = 1; mid<=N; mid++){
    for(let start = 1; start<=N; start++){
      for(let end = 1; end<=N; end++){
        let time = town[start][mid]+town[mid][end];
        if(time<town[start][end]){
          town[start][end]=time;
        }
      }
    }
  }
  return town[1].filter(val => val<=K).length;
}

function solution(N, road, K) {
  //다익스트라
  const INF = 123456789;
  let town = Array.from({ length: N + 1 }, () => []);
  let distance = Array(N+1).fill(INF);
  road.forEach(r =>{
    town[r[0]].push([r[1],r[2]]);
    town[r[1]].push([r[0],r[2]]);
  });
  const pq = [[1,0]];
  distance[1]=0;
  while(pq.length){
    let [cur,time]=pq.pop();
    town[cur].forEach(next=>{
      if(distance[next[0]]>distance[cur]+next[1]){
        distance[next[0]]=distance[cur]+next[1];
        pq.push(next);
      }
    });
  }
  return distance.filter(time=>time<=K).length;
}

console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3));//4
console.log(solution(6,[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],4));//4