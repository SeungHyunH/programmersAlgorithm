function solution(maps) {
  var answer = -1;
  const goal = [maps.length-1,maps[0].length-1];
  const direction = [[1,0],[0,1],[-1,0],[0,-1]];
  function bfs(){
    let queue = [];
    let visited = maps;
    let cnt = 0;
    queue.push([0,0]);
    visited[0][0]=0;
    while(queue.length>0){
      cnt++;
      let len = queue.length;
      for(let i = 0; i < len; i++){
        let [x,y] = queue.shift();

        for(let i = 0; i < 4; i++){
          let tx = x+direction[i][0];
          let ty = y+direction[i][1];
          if(0 <= tx && tx <= goal[0] && 0 <= ty && ty <= goal[1] && visited[tx][ty]===1){
            if(tx === goal[0]&& ty === goal[1]){
              answer = cnt+1;
              return;
            }
            queue.push([tx,ty]);
            visited[tx][ty]=0;
          }
        }
      }
    }
  }
  bfs();
  return answer;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));//11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));//-1