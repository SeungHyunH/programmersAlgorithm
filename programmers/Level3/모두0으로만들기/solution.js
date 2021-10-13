function solution(a, edges) {
  if(a.reduce((acc,cur)=>acc+cur,0)!==0){return -1;}
  let answer = BigInt(0);
  const N = a.length;
  const graph = Array.from(Array(N),()=>[]);
  edges.forEach(([u,v])=>{
    graph[u].push(v);
    graph[v].push(u);
  });
  const visited = Array(N).fill(false);
  const parent = [];
  const stack = [[0,-1]];
  while(stack.length){
    let [cur,before] = stack.pop();
    if(!visited[cur]){
      visited[cur]=true;
      parent.push([cur,before]);
      graph[cur].forEach(val=>{
        if(!visited[val]){stack.push([val,cur]);}
      });
    }
  }

  for(let i = parent.length-1; i>0; i--){
    a[parent[i][1]] += a[parent[i][0]];
    answer+=BigInt(Math.abs(a[parent[i][0]]));
  }
  return answer;
}

console.log(solution(	[-5, 0, 2, 1, 2], [[0, 1], [3, 4], [2, 3], [0, 3]]));//9
console.log(solution(	[0, 1, 0], [[0, 1], [1, 2]]));//-1