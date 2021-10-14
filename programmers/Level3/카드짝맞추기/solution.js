function solution(board, r, c) {
  const pair = Array.from(Array(7), () => []);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== 0) { pair[board[i][j]].push([i, j]); }
    }
  }

  const pairLen = pair.reduce((acc, cur) => acc + (cur.length === 0 ? 0 : 1), 0);
  const permutation = [];
  const getPermutation = (arr, visit) => {
    if (arr.length === pairLen) { permutation.push(arr); return; }
    for (let i = 1; i <= 6; i++) {
      if (pair[i].length === 0) { continue; }
      if (visit[i]) { continue; }
      let temp = visit.slice();
      temp[i] = true;
      getPermutation([...arr, [...pair[i][0], ...pair[i][1]]], temp);
      getPermutation([...arr, [...pair[i][1], ...pair[i][0]]], temp);
    }
  }
  getPermutation([], Array(7).fill(false));

  const isMovable = (y, x) => { return 0 <= y && y <= 3 && 0 <= x && x <= 3 }
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const ctrlMove = (y, x, dy, dx, board) => {
    let ty = y, tx = x;
    while (true) {
      const tty = ty + dy;
      const ttx = tx + dx;
      if (!isMovable(tty, ttx)) return [ty, tx];
      if (board[tty][ttx]) return [tty, ttx];
      ty = tty;
      tx = ttx;
    }
  }

  const BFS = (sy, sx, ey, ex, board) => {
    if (sy === ey && sx === ex) { return [sy, sx, 1]; }
    const queue = [[sy, sx]];
    const visit = Array.from(Array(4), () => Array(4).fill(false));
    const table = Array.from(Array(4), () => Array(4).fill(0));
    visit[sy][sx] = true;
    while (queue.length) {
      const [y, x] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let ty = y + dy[i];
        let tx = x + dx[i];
        if (isMovable(ty, tx)) {
          if (!visit[ty][tx]) {
            visit[ty][tx] = true;
            table[ty][tx] = table[y][x] + 1;

            if (ty === ey && tx === ex) { return [ty, tx, table[ty][tx] + 1]; }
            queue.push([ty, tx]);
          }
        }

        [ty, tx] = ctrlMove(y, x, dy[i], dx[i], board);
        if (!visit[ty][tx]) {
          visit[ty][tx] = true;
          table[ty][tx] = table[y][x] + 1;

          if (ty === ey && tx === ex) { return [ty, tx, table[ty][tx] + 1]; }
          queue.push([ty, tx]);
        }
      }
    }
    return [sy, sx, Infinity];
  }
  let answer = Infinity;
  let tempBoard = Array.from(Array(4),()=>Array(4).fill(0));
  permutation.forEach((per, idx) => {
    pair.forEach((val,idx)=>{
      if(val.length){
        tempBoard[val[0][0]][val[0][1]] = idx+1;
        tempBoard[val[1][0]][val[1][1]] = idx+1;
      }
    });
    let cnt, count = 0;
    let ty = r, tx = c;
    per.forEach(cur => {
      if(count>answer){return false;}
      let [sy, sx, ey, ex] = cur;
      [ty, tx, cnt] = BFS(ty, tx, sy, sx, tempBoard);
      tempBoard[sy][sx] = 0;
      count += cnt;
      [ty, tx, cnt] = BFS(ty, tx, ey, ex, tempBoard);
      count += cnt;
      tempBoard[ey][ex] = 0;
    });
    answer = Math.min(answer, count);
  });

  return answer;
}

console.log(solution([[1, 0, 0, 3], [2, 0, 0, 0], [0, 0, 0, 2], [3, 0, 1, 0]], 1, 0));//14
console.log(solution([[3, 0, 0, 2], [0, 0, 1, 0], [0, 1, 0, 0], [2, 0, 0, 3]], 0, 1));//16