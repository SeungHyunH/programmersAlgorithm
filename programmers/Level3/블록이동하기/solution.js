function solution(board) {
  const getNextPos = (left, right, board) => {
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const result = [];
    moves.forEach(move => {
      const [dy, dx] = move;
      const nextLeft = [left[0] + dy, left[1] + dx];
      const nextRight = [right[0] + dy, right[1] + dx];
      if (!board[nextLeft[0]][nextLeft[1]] &&
        !board[nextRight[0]][nextRight[1]]) { result.push([nextLeft, nextRight]); }
    });
    const toward = [-1, 1];

    if (left[0] === right[0]) {
      toward.forEach(dy => {
        if (!board[left[0] + dy][left[1]] &&
          !board[right[0] + dy][right[1]]) {
          result.push([left, [left[0] + dy, left[1]]]);
          result.push([[right[0] + dy, right[1]], right]);
        }
      });
    } else {
      toward.forEach(dx => {
        if (!board[left[0]][left[1]+dx] &&
          !board[right[0]][right[1]+dx]) {
          result.push([[left[0], left[1]+dx],left]);
          result.push([right,[right[0],right[1]+dx]]);
        }
      });
    }
    return result;
  }
  const n = board.length;
  const queue = [ [ [1,1], [1,2], 0 ] ];
  const goal = n+''+n;
  const visited = new Set(["1112"]);
  const newBoard = new Array(n+2).fill().map(_ => new Array(n+2).fill(1));
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      newBoard[i+1][j+1] = board[i][j];
    }
  }
  while(queue.length){
    const [left,right,count]=queue.shift();
    if(left.join('')===goal||right.join('')===goal){return count;}
    getNextPos(left,right,newBoard).forEach(next=>{
      const [nextLeft,nextRight] = next;
      const key = nextLeft.join('')+nextRight.join('');
      if(!visited.has(key)){
        queue.push([nextLeft,nextRight,count+1]);
        visited.add(key);
      }
    });
  }
  return 0;
}

console.log(solution([[0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0]]));//7