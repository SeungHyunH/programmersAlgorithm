function solution(n, costs) {
  let answer = 0;
  const parent = Array.apply(null,Array(n)).map((_,idx)=>idx);
  costs.sort((a,b)=>a[2]-b[2]);

  const getParent = (parent,x) => {
    if(parent[x] === x){return x;}
    return parent[x] = getParent(parent,parent[x]);
  }

  const findParent = (parent,a,b) => {
    const p1 = getParent(parent,a);
    const p2 = getParent(parent,b);
    return p1===p2;
  }

  const unionParent = (parent,a,b) =>{
    const p1 = getParent(parent,a);
    const p2 = getParent(parent,b);
    if(p1<p2){return parent[p2]=p1;}
    else return parent[p1]=p2;
  }

  costs.forEach(cost=>{
    if(!findParent(parent,cost[0],cost[1])){
      answer+=cost[2];
      unionParent(parent,cost[0],cost[1]);
    }
  });
  
  return answer;
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]));//4