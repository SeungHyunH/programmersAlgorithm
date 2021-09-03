function solution(arr) {
  const answer = [0, 0];
  function CompQuad(x, y, len) {
    let flag = false;
    for(let i = x; i < x+len; i++){//쿼드압축여부 검사
      for(let j = y; j < y+len; j++){
        if(arr[x][y]!==arr[i][j]){
          flag = true;
          break;
        }
      }
      if(flag){break;}
    }

    if(flag){//분할해야한다면 재귀적으로 분할
      len/=2;
      CompQuad(x,y,len);
      CompQuad(x+len,y,len);
      CompQuad(x,y+len,len);
      CompQuad(x+len,y+len,len);
    }else{//전부 같다면 하나로 압축
      (arr[x][y]===0) ? answer[0]++:answer[1]++;
    }
  }
  CompQuad(0,0,arr.length);
  return answer;
}

console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]));//[4,9]
console.log(solution([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]]));//[10,15]
console.log(solution([[0,0],[0,0]]));//[1,0]