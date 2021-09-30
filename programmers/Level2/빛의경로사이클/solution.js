function solution(grid) {
  var answer = [];
  const N = grid.length;
  const M = grid[0].length;
  const dy = [-1, 1, 0, 0];//위 아래 왼쪽 오른쪽
  const dx = [0, 0, 1, -1];

  const Change_dir = (cur, dir) => {
    if (cur === 'S'){return dir;}
    else if (cur === 'L') {
      if (dir === 0) { return 2; }
      else if (dir === 1) { return 3; }
      else if (dir === 2) { return 1; }
      else if (dir === 3) { return 0; }
    } else {
      if (dir === 0) { return 3; }
      else if (dir === 1) { return 2; }
      else if (dir === 2) { return 0; }
      else if (dir === 3) { return 1; }
    }
  }
  const visited = Array.from(Array(N), () => Array.from(Array(M), () => Array(4).fill(false)));
  const bfs = (start_y,start_x,start_dir) =>{
    const pq = [[start_y,start_x,start_dir,1]];
    visited[start_y][start_x][start_dir]=true;
    while(pq.length) {
      let [y, x, dir, len] = pq.shift();
      const td = Change_dir(grid[y][x], dir);
      let tx = x + dx[td];
      let ty = y + dy[td];
      ty = ty===N ? 0 : ty < 0 ? N-1 : ty;
      tx = tx===M ? 0 : tx < 0 ? M-1 : tx;

      if(visited[ty][tx][td]){return len;}
      visited[ty][tx][td]=true;
      pq.push([ty, tx, td,len+1]);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let k = 0; k < 4; k++) {
        if(!visited[i][j][k]){answer.push(bfs(i, j, k));}
      }
    }
  }
  answer.sort((a,b)=>a-b);
  return answer;
}

console.log(solution(["SL", "LR"]));//[16]
console.log(solution(["S"]));//[1,1,1,1]
console.log(solution(["R", "R"]));//[4,4]