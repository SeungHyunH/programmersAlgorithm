function solution(n, build_frame) {
  const map = Array.from(Array(n + 1), () => Array.from(Array(n + 1), () => Array(2).fill(false)));

  const Check = (x, y, a) => {
    if (a === 0) {//기둥일 때
      if (y === 0) { return true; }//기둥이 바닥에 설치 될 때
      if (y - 1 >= 0 && map[x][y - 1][0]) { return true; }
      if (x - 1 >= 0 && map[x - 1][y][1]) { return true; }
      if (map[x][y][1]) { return true; }
    } else {//보 일때
      if (y - 1 >= 0 && map[x][y - 1][0]) { return true; }
      if (x + 1 <= n && y - 1 >= 0 && map[x + 1][y - 1][0]) { return true; }
      if (x + 1 <= n && x - 1 >= 0 && map[x + 1][y][1] && map[x - 1][y][1]) { return true; }
    }
    return false;
  }

  build_frame.forEach(([x, y, a, b]) => {
    if (b === 1) {//설치
      if (Check(x, y, a)) { map[x][y][a] = true; }
    }
    else {//삭제
      let flag = false;
      map[x][y][a]=false;
      for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
          for (let k = 0; k < 2; k++) {
            if (map[i][j][k] && !Check(i, j, k)) {
              flag = true;
              map[x][y][a] = true;
              break;
            }
          }
          if (flag) { break; }
        }
        if (flag) { break; }
      }
    }
  });

  const answer = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (map[i][j][0]) { answer.push([i, j, 0]); }
      if (map[i][j][1]) { answer.push([i, j, 1]); }
    }
  }

  return answer;
}

console.log(solution(5, [[1, 0, 0, 1], [1, 1, 1, 1], [2, 1, 0, 1], [2, 2, 1, 1], [5, 0, 0, 1], [5, 1, 0, 1], [4, 2, 1, 1], [3, 2, 1, 1]]));//[[1, 0, 0], [1, 1, 1], [2, 1, 0], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 0, 0], [5, 1, 0]]
console.log(solution(5, [[0, 0, 0, 1], [2, 0, 0, 1], [4, 0, 0, 1], [0, 1, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1], [3, 1, 1, 1], [2, 0, 0, 0], [1, 1, 1, 0], [2, 2, 0, 1]]));//[[0, 0, 0], [0, 1, 1], [1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 0, 0]]