function solution(board) {
  let answer = 0;
  const row_len = board.length;
  const col_len = board[0].length;
  if(row_len===1&&col_len===1){return 1;}
  for(let row = 1; row < row_len; row++){
    for(let col = 1; col < col_len; col++){
      if(board[row][col] > 0){
        board[row][col] = Math.min(board[row-1][col-1],
        board[row-1][col],board[row][col-1])+1;//위쪽,왼쪽,왼쪽대각선위쪽중비교
        answer = Math.max(answer,board[row][col]);
      }
    }
  }
  return Math.pow(answer,2);
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]));//9
console.log(solution([[0,0,1,1],[1,1,1,1]]));//9