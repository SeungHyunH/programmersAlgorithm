function solution(board, skill) {
  skill.forEach(s => {
    let [type, r1, c1, r2, c2, degree] = s;
    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        board[i][j] += type === 1 ? -degree : degree;
      }
    }
  });
  let answer = 0;
  board.forEach(row => row.forEach(el => el >= 1 ? answer++ : 0));
  return answer;
}

function solution(board, skill) {
  let newBoard = Array.from({ length: board.length+1 }, () => Array.from({ length: board.length+1 }, () => 0));
  skill.forEach(s => {
    let [type, r1, c1, r2, c2, degree] = s;
    degree *= type === 1 ? -1 : 1;
    newBoard[r1][c1] += degree;
    newBoard[r1][c2 + 1] -= degree;
    newBoard[r2 + 1][c1] -= degree;
    newBoard[r2 + 1][c2 + 1] += degree;
  });
  for (let i = 1; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[0].length; j++) {
      newBoard[i][j] += newBoard[i - 1][j];
    }
  }
  for (let i = 1; i < newBoard[0].length; i++) {
    for (let j = 0; j < newBoard.length; j++) {
      newBoard[j][i] += newBoard[j][i - 1];
    }
  }
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j]+=newBoard[i][j];
      if(board[i][j]>0){answer++;}
    }
  }
  return answer;
}

console.log(solution([[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]], [[1, 0, 0, 3, 4, 4], [1, 2, 0, 2, 3, 2], [2, 1, 0, 3, 1, 2], [1, 0, 1, 3, 3, 1]]));//10
console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 1, 1, 2, 2, 4], [1, 0, 0, 1, 1, 2], [2, 2, 0, 2, 0, 100]]));//6