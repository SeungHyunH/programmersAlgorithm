function solution(n, wires) {
  let answer = n;
  const graph = Array.from(Array(n+1),()=>[]);
  wires.forEach(([v1,v2])=>{
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const dfs = (cur)=>{
    if(visit[cur]){return false;}
    visit[cur]=true;
    cnt++;
    graph[cur].forEach(val=>{
      if(!visit[val]){dfs(val);}
    });
  }
  let visit = Array(n+1);
  let cnt=0;
  for(let i = 1 ; i <= n; i++){
    graph[i].forEach(el=>{
      visit.fill(false);
      visit[i]=true;
      cnt = 0;
      dfs(el);
      answer = Math.min(answer,Math.abs(n-2*cnt));
    });
  }
  return answer;
}

console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]));//3
console.log(solution(	4, [[1, 2], [2, 3], [3, 4]]));//0
console.log(solution(	7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]));//1