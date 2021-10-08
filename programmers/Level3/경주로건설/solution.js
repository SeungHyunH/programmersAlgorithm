function solution(board) {
  const N = board.length;
  const dy = [-1,1,0,0];//위,아래,왼쪽,오른쪽
  const dx = [0,0,-1,1];
  const INF = 987654321;
  const init_right = board[0][1];

  const BFS = (direction)=>{
    if(direction===0){
      board[0][1]=1;
    }else{
      board[1][0]=1;
      board[0][1]=init_right;
    }

    const dp = Array.from(Array(N),()=>(Array(N).fill(INF)));
    dp[0][0]=0;
    const queue = [];
    queue.push([0,0,0,0,0]);
    while(queue.length){
      let [curCost,curY,curX,preY,preX] = queue.shift();
      for(let i = 0; i < 4; i++){
        let ty = curY+dy[i],tx = curX+dx[i];
        if(0 <= tx && tx < N && 0 <= ty && ty < N && board[ty][tx]===0){
          let nextCost = curCost + ((preX === tx || preY === ty) ? 100 : 600);
          if(nextCost <= dp[ty][tx]){
            queue.push([nextCost,ty,tx,curY,curX]);
            dp[ty][tx]=nextCost;
          }
        }
      }
    }
    return dp[N-1][N-1];
  }

  return Math.min(BFS(0),BFS(1));
}

console.log(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));//900
console.log(solution(	[[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]]));//3800
console.log(solution([[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]));//2100
console.log(solution(	[[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0]]));//3200
console.log(solution([[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [1, 0, 0, 0, 1], [0, 1, 1, 0, 0]]));//3000