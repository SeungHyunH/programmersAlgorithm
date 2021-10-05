function solution(game_board, table) {
  let answer = 0;
  const N = game_board.length;//맵 크기
  const dy = [-1, 1, 0, 0];//상,하,좌,우
  const dx = [0, 0, -1, 1];

  let puzzle = [];//퍼즐 배열
  let puzzle_count = 0;//현재 DFS로 찾은 puzzle갯수
  const Find_Puzzle = (ty, tx) => {//DFS로 재귀적으로 퍼즐을 탐색
    if (0 > ty || ty >= N || 0 > tx || tx >= N) { return; }//맵을 벗어난 좌표
    if (table[ty][tx] === 0) { return; }//퍼즐이 아닌 경우
    puzzle[puzzle_count].push([ty, tx]);//현재 찾고있는 퍼즐에 좌표를 추가
    table[ty][tx] = 0;//table에 찾았음을 반영
    for (let i = 0; i < 4; i++) {//현재좌표의 상하좌우를 재귀적으로 탐색
      Find_Puzzle(ty + dy[i], tx + dx[i]);
    }
  }
  let board = [];//보드구멍 배열
  let board_count = 0;//보드구멍 갯수
  const Find_board = (ty, tx) => {//puzzle과 동일하게 DFS로 구멍을 탐색
    if (0 > ty || ty >= N || 0 > tx || tx >= N) { return; }
    if (game_board[ty][tx] === 1) { return; }
    board[board_count].push([ty, tx]);
    game_board[ty][tx] = 1;
    for (let i = 0; i < 4; i++) {
      Find_board(ty + dy[i], tx + dx[i]);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (table[i][j] === 1) {//퍼즐을 찾았을 때
        puzzle.push([]);
        Find_Puzzle(i, j);//DFS로 이어진 좌표들을 탐색
        puzzle_count++;//다음 퍼즐을 탐색
      }
      if (game_board[i][j] === 0) {//보드에 구멍이 있을 때
        board.push([]);
        Find_board(i, j);//DFS로 구멍이 이어진 좌표들을 탐색
        board[board_count] = board[board_count].sort((a, b) => {//탐색
          if (a[0] === b[0]) { return a[1] - b[1]; }
          else { return a[0] - b[0]; }
        });
        board_count++;
      }
    }
  }

  const Rotate = () => {//퍼즐회전 (행렬 변환 응용)
    puzzle = puzzle.map(p => p.map(([y, x]) => [x, N - y - 1]));
  }

  const Check = (b_idx, p_idx) => {//구멍과 퍼즐의 일치여부 확인
    const y_gap = board[b_idx][0][0] - puzzle[p_idx][0][0];//퍼즐과 구멍의 Y좌표 차이
    const x_gap = board[b_idx][0][1] - puzzle[p_idx][0][1];//퍼즐과 구멍의 X좌표 차이
    for (let i = 0; i < board[b_idx].length; i++) {
      let b_y = board[b_idx][i][0];//구멍 Y좌표
      let b_x = board[b_idx][i][1];//보드 X좌표
      let p_y = puzzle[p_idx][i][0] + y_gap; //이동한 퍼즐 Y좌표 = 원래퍼즐 Y좌표+Y좌표차이
      let p_x = puzzle[p_idx][i][1] + x_gap; //이동한 퍼즐 X좌표 = 원래퍼즐 X좌표+X좌표차이

      //구멍좌표와 퍼즐좌표가 다르거나 이동한 퍼즐의 좌표가 맵을 벗어났을 때 false
      if (b_y !== p_y || b_x !== p_x || p_y < 0 || p_x < 0 || p_y >= N || p_x >= N) { return false; }
    }
    return true;
  }

  const board_visit = Array(board.length).fill(false);//구멍탐색 여부
  const puzzle_visit = Array(puzzle.length).fill(false);//퍼즐탐색 여부
  for (let r = 0; r < 4; r++) {//90도씩 4번의 회전에 대해 탐색
    for (let i = 0; i < puzzle.length; i++) {//모든 퍼즐에 대해 탐색
      if (puzzle_visit[i]) { continue; }//이미 검사한 퍼즐은 continue
      puzzle[i] = puzzle[i].sort((a, b) => {//퍼즐정렬
        if (a[0] === b[0]) { return a[1] - b[1]; }
        else { return a[0] - b[0]; }
      });
      for (let j = 0; j < board.length; j++) {//모든 구멍에 대해 탐색
        if (board_visit[j] || board[j].length !== puzzle[i].length) { continue; } //구멍을 이미 탐색했거나 구멍과 퍼즐의 좌표갯수가 다를 때
        if (Check(j, i)) {//일치했을 때
          answer += board[j].length;//갯수 추가
          board_visit[j] = true;
          puzzle_visit[i] = true;
          break;
        };
      }
    }
    Rotate();//시계방향 90도로 회전
  }
  return answer;
}

console.log(solution([[1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 0, 0]], [[1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0]]));//14
console.log(solution([[0, 0, 0], [1, 1, 0], [1, 1, 1]], [[1, 1, 1], [1, 0, 0], [0, 0, 0]]));//0