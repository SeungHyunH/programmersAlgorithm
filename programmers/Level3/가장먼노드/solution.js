function solution(n, edge) {
  let answer = 0;
  const arr = Array.from(Array(n+1),()=>[]);
  edge.forEach(ed=>{
    arr[ed[0]].push(ed[1]);
    arr[ed[1]].push(ed[0]);
  });
  console.log(arr);
  let pq = [1];
  const visited = Array.from(Array(n+1),()=>false);
  visited[1]=true;
  while(pq.length){
    //console.log(pq);
    let len = pq.length;
    let cnt = 0;
    for(let i = 0; i < len; i++){
      let cur = pq.shift();
      arr[cur].forEach(val=>{
        if(!visited[val]){
          visited[val]=true;
          pq.push(val);
          cnt++;
        }
      });
    }
    if(cnt===0){break;}
    else{answer = cnt;}
  }
  return answer;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));//3