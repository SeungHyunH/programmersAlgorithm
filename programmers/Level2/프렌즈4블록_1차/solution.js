function solution(m, n, board) {
  let answer = 0;
  const arr = [];
  board.forEach(row=>arr.push(row.split('')));

  while(true){
    let queue = [];
    
    //지워지는 블록의 index를 queue에 추가
    for(let i = 0; i < m-1; i++){
      for(let j = 0; j < n-1; j++){
        let cur = arr[i][j];
        if(cur===-1){continue;}
        if(cur===arr[i][j+1]&&cur===arr[i+1][j]&&cur===arr[i+1][j+1]){
          queue.push([i,j]);
          queue.push([i+1,j]);
          queue.push([i,j+1]);
          queue.push([i+1,j+1]);
        }
      }
    }

    if(!queue.length){break;}//지울 블럭이 없으면 종료

    //블록 지우기
    while(queue.length){
      let [row,col] = queue.pop();
      if(arr[row][col]===-1){continue;}
      else{
        arr[row][col]=-1;
        answer++;
      }
    }

    //위치 재정렬
    for(let col = 0; col < n; col++){
      let temp = [];

      //각 행에서 안지워진 블록만 추가
      for(let row = 0; row<m; row++){
        if(arr[row][col]!==-1){temp.push(arr[row][col]);}
      }

      //-1과 블록으로 재정렬
      for(let i = 0; i<m-temp.length;i++){
        arr[i][col]=-1;
      }
      let len = temp.length;
      for(let i = m-1; i>=m-len;i--){
        arr[i][col]=temp.pop();
      }
    }
  }
  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));