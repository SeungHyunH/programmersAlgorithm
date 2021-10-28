function solution(k, dungeons) {
  //순열조합
  const getPermutations = (arr,selectNumber)=>{
    const result = [];
    if(selectNumber === 1){return arr.map(el=>[el]);}

    arr.forEach((v,i,o)=>{
      const rest = [...o.slice(0,i),...o.slice(i+1)];
      const perms = getPermutations(rest,selectNumber-1);
      result.push(...perms.map(el=>[v,...el]));
    });

    return result;
  }

  const n = dungeons.length;
  let answer = 0;
  getPermutations(Array.from(Array(n),(_,i)=>i),n).forEach(dungeon=>{
    let cnt = 0;
    let left = k;
    dungeon.forEach(cur=>{
      let [minimum,energe] = dungeons[cur];
      if(minimum<=left){
        left-=energe;
        cnt++;
      }
    });
    answer = Math.max(answer,cnt);
  })
  return answer;
}

function solution(k, dungeons) {
  //DFS
  const n = dungeons.length;
  const visited = Array(n).fill(false);
  let ans = 0;
  const dfs = (cur,depth,left)=>{
    visited[cur]=true;
    left-=dungeons[cur][1];
    for(let i = 0; i < n; i++){
      if(!visited[i]&&dungeons[i][0]<=left){dfs(i,depth+1,left);}
    }
    ans = Math.max(depth,ans);
    visited[cur]=false;
  }
  for(let i = 0; i < n; i++){
    if(k>=dungeons[i][0]){dfs(i,1,k);}
  }
  return ans;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]));//3