function solution(info, edges) {
  let answer = 0;
  let graph = Array.from({length:info.length},()=>[]);
  edges.forEach(edge=>graph[edge[0]].push(edge[1]));

  let dfs = (next,cur,sheep,wolf)=>{
    info[cur]?wolf++:sheep++;
    answer = Math.max(sheep,answer);
    if(sheep<=wolf){return;}
    
    const idx = next.indexOf(cur);
    if(idx>-1){next.splice(idx,1);}
    if(graph[cur].length){
      graph[cur].forEach(node=>next.push(node));
    }
    next.forEach(node=>dfs([...next],node,sheep,wolf));
  }
  dfs([0],0,0,0);
  return answer;
}
console.log(solution([0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], [[0, 1], [1, 2], [1, 4], [0, 8], [8, 7], [9, 10], [9, 11], [4, 3], [6, 5], [4, 6], [8, 9]]));//5
console.log(solution(	[0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0], [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [3, 7], [4, 8], [6, 9], [9, 10]]));//5