function solution(board, aloc, bloc) {
  const row_len = board.length;
  const col_len = board[0].length;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let OOB = (x, y) => { return x < 0 || x >= row_len || y < 0 || y >= col_len; }
  let DFS = (curLoc, nextLoc) => {
    if (!board[curLoc[0]][curLoc[1]]) { return 0; }
    let curTurn = 0;
    board[curLoc[0]][curLoc[1]] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = curLoc[0] + dir[i][0];
      let ny = curLoc[1] + dir[i][1];
      if (OOB(nx, ny) || !board[nx][ny]) { continue; }
      let nextTurn = DFS(nextLoc, [nx, ny]) + 1;

      if (curTurn % 2 === 0 && nextTurn % 2 === 1) { curTurn = nextTurn; }
      else if (curTurn % 2 === 0 && nextTurn % 2 === 0) { curTurn = Math.max(curTurn, nextTurn); }
      else if (curTurn % 2 === 1 && nextTurn % 2 === 1) { curTurn = Math.min(curTurn, nextTurn); }
    }
    board[curLoc[0]][curLoc[1]] = 1;
    return curTurn;
  }
  return DFS(aloc, bloc);
}

function solution(board, aloc, bloc) {
  const rowLen = board.length;
  const colLen = board[0].length;
  const OOM = (x, y) => x < 0 || x >= rowLen || y < 0 || y >= colLen;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const TurnA = (aloc, bloc, count) => {
    if (!board[aloc[0]][aloc[1]]) { return count; }
    board[aloc[0]][aloc[1]] = 0;

    let win = Infinity;
    let lose = 0;

    for (let i = 0; i < 4; i++) {
      let nx = aloc[0] + dir[i][0];
      let ny = aloc[1] + dir[i][1];

      if (OOM(nx, ny) || !board[nx][ny]) { continue; }

      let countB = TurnB([nx, ny], bloc, count + 1);

      if (countB % 2 === 0) {//내가 패배했을 때
        lose = Math.max(lose, countB);//최대한 많이 이동
      } else {//내가 승리했을 때
        win = Math.min(win, countB);//최소로 적게 이동
      }
    }

    board[aloc[0]][aloc[1]] = 1;

    if (win === Infinity && lose === 0) { return count; }//초기와 같은상태 === 더이상 못 움직일 때
    if (win !== Infinity) { return win; }//이겼을 때
    return lose;//졌을 때
  }
  const TurnB = (aloc, bloc, count) => {
    if (!board[bloc[0]][bloc[1]]) { return count; }
    board[bloc[0]][bloc[1]] = 0;

    let win = Infinity;
    let lose = 0;

    for (let i = 0; i < 4; i++) {
      let nx = bloc[0] + dir[i][0];
      let ny = bloc[1] + dir[i][1];

      if (OOM(nx, ny) || !board[nx][ny]) { continue; }

      let countA = TurnA(aloc, [nx, ny], count + 1);

      if (countA % 2 === 1) {//내가 패배했을 때
        lose = Math.max(lose, countA);//최대한 많이 이동
      } else {//내가 승리했을 때
        win = Math.min(win, countA);//최소로 적게 이동
      }
    }

    board[bloc[0]][bloc[1]] = 1;

    if (win === Infinity && lose === 0) { return count; }//초기와 같은상태 === 더이상 못 움직일 때
    if (win !== Infinity) { return win; }//이겼을 때
    return lose;//졌을 때
  }
  return TurnA(aloc, bloc, 0);
}

function solution(board, aloc, bloc) {
  const rowLen = board.length;
  const colLen = board[0].length;
  const OOM = (x, y) => x < 0 || x >= rowLen || y < 0 || y >= colLen;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const DFS = (cur, next, count) => {
    if (!board[cur[0]][cur[1]]) { return count; }//현재위치의 발판이 없다면 패배

    board[cur[0]][cur[1]] = 0; //현재위치의 발판 없애기

    let win = Infinity;
    let lose = 0;

    for (let i = 0; i < 4; i++) {//4방향
      let nx = cur[0] + dir[i][0];//다음X
      let ny = cur[1] + dir[i][1];//다음Y

      if (OOM(nx, ny) || !board[nx][ny]) { continue; }//맵을 벗어나거나 없는 발판일 때

      let nextCount = DFS(next, [nx, ny], count + 1);//게임을 진행

      if (count % 2 === 0) {//A턴
        if (nextCount % 2 === 0) {//A가 패배
          lose = Math.max(lose, nextCount);//최대한 많이 이동
        } else {//A가 승리
          win = Math.min(win, nextCount);//최소로 적게 이동
        }
      }else{//B턴
        if (nextCount % 2 === 1) {//B가 패배
          lose = Math.max(lose, nextCount);//최대한 많이 이동
        } else {//B가 승리
          win = Math.min(win, nextCount);//최소로 적게 이동
        }
      }
    }

    board[cur[0]][cur[1]] = 1;//현재위치의 발판 복구

    if (win === Infinity && lose === 0) { return count; }//초기와 같은상태 === 더이상 못 움직일 때
    if (win !== Infinity) { return win; }//이겼을 때
    return lose;//졌을 때
  }
  return DFS(aloc, bloc, 0);//A가 먼저 진행
}

console.log(solution([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [1, 0], [1, 2]));//5
console.log(solution([[1, 1, 1], [1, 0, 1], [1, 1, 1]], [1, 0], [1, 2]));//4
console.log(solution([[1, 1, 1, 1, 1]], [0, 0], [0, 4]));//4
console.log(solution([[1]], [0, 0], [0, 0]));//0