function solution(board, r, c) {
  const pair = Array.from(Array(7), () => []);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== 0) { pair[board[i][j]].push([i, j]); }
    }
  }

  const pairLen = pair.reduce((acc, cur) => acc + (cur.length === 0 ? 0 : 1), 0);
  const permutation = [];
  const getPermutation = (arr) => {
    if (arr.length === pairLen) { permutation.push(arr); return; }
    for (let i = 1; i <= 6; i++) {
      if (pair[i].length === 0) { continue; }
      if (arr.includes(i)){continue;}
      getPermutation([...arr,i]);
    }
  }

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

  const backtrack = (sy,sx,k,count,board,permutation)=>{
    if(k===pairLen){answer = (answer>count) ? count : answer;return;}
    const idx = permutation[k];
    const [ly,lx] = pair[idx][0];
    const [ry,rx] = pair[idx][1];

    let [ty1,tx1,cnt1] = BFS(sy,sx,ly,lx,board);
    let [ty2,tx2,cnt2] = BFS(ty1,tx1,ry,rx,board);
    board[ly][lx]=0;
    board[ry][rx]=0;
    backtrack(ty2,tx2,k+1,count+cnt1+cnt2,board,permutation);
    board[ly][lx]=idx;
    board[ry][rx]=idx;

    [ty1,tx1,cnt1] = BFS(sy,sx,ry,rx,board);
    [ty2,tx2,cnt2] = BFS(ty1,tx1,ly,lx,board);
    board[ly][lx]=0;
    board[ry][rx]=0;
    backtrack(ty2,tx2,k+1,count+cnt1+cnt2,board,permutation);
    board[ly][lx]=idx;
    board[ry][rx]=idx;
  }

  let answer = Infinity;
  getPermutation([]);
  const new_board = board.slice();
  permutation.forEach(per=>backtrack(r,c,0,0,new_board,per));

  return answer;
}

console.log(solution([[1, 0, 0, 3], [2, 0, 0, 0], [0, 0, 0, 2], [3, 0, 1, 0]], 1, 0));//14
console.log(solution([[3, 0, 0, 2], [0, 0, 1, 0], [0, 1, 0, 0], [2, 0, 0, 3]], 0, 1));//16