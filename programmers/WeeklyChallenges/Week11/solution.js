function solution(rectangle, characterX, characterY, itemX, itemY) {
  //테스트케이스4만 안됨
  //좌표를 기준으로 4방향을 테두리로 저장하는 방법
  const map = Array.from(Array(52), () => Array(52).fill(false));
  rectangle.forEach(([lx, ly, rx, ry]) => {
    for (let x = lx; x < rx; x++) {
      for (let y = ly; y < ry; y++) {
        map[x][y] = true;
      }
    }
  });

  const dy = [1, 0, -1, 0];//위,오,아,왼
  const dx = [0, 1, 0, -1];
  let visited = Array.from(Array(52), () => Array(51).fill(false));
  const road = Array.from(Array(52), () => Array.from(Array(52), () => Array(4).fill(false)));
  const findRoad = (x, y) => {//재귀적으로 길을 찾음
    if (0 > x || 0 > y || x > 50 || y > 50 || !map[x][y] || visited[x][y]) { return; }
    visited[x][y] = true;
    if (0 <= x - 1 && !map[x - 1][y]) {//왼쪽에 사각형이 없다면 왼쪽 외각
      road[x][y][0] = true;
      if (y <= 50) { road[x][y + 1][2] = true; }
    }
    if (50 >= x && !map[x + 1][y]) {//오른쪽
      road[x + 1][y][0] = true;
      if (y + 1 <= 50) { road[x + 1][y + 1][2] = true; }
    }
    if (0 <= y - 1 && !map[x][y - 1]) {//아래
      road[x][y][1] = true;
      if (x <= 50) { road[x + 1][y][3] = true; }
    }
    if (50 >= y && !map[x][y + 1]) {//위
      road[x][y + 1][1] = true;
      road[x + 1][y + 1][3] = true;
    }

    for (let i = 0; i < 4; i++) { findRoad(x + dx[i], y + dy[i]); }
  }
  findRoad(characterX, characterY);
  findRoad(characterX - 1, characterY);
  findRoad(characterX, characterY - 1);
  findRoad(characterX, characterY - 1);

  const bfs = () => {
    const pq = [];
    let visited = Array.from(Array(52), () => Array.from(Array(52), () => Array(4).fill(false)));
    for (let i = 0; i < 4; i++) {
      if (road[characterX][characterY][i]) {
        pq.push([characterX, characterY, i]);
      }
    }
    let cnt = 0;
    while (pq.length) {
      let len = pq.length;
      for (let i = 0; i < len; i++) {
        let [x, y, dir] = pq.shift();
        if (visited[x][y][dir]) { continue; }
        if (x === itemX && y === itemY) { return cnt; }
        let tx = x + dx[dir];
        let ty = y + dy[dir];
        if (tx === itemX && ty === itemY) { return ++cnt; }
        visited[x][y][dir] = true;
        visited[tx][ty][(dir + 2) % 4] = true;
        for (let i = 0; i < 4; i++) {
          if (!visited[tx][ty][i] && road[tx][ty][i]) {
            pq.push([tx, ty, i]);
            break;
          }
        }
      }
      cnt++;
    }

    return 0;
  }

  return bfs();
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const startX = characterX * 2;
  const startY = characterY * 2;
  const endX = itemX * 2;
  const endY = itemY * 2;

  const map = Array.from(Array(103), () => Array(103).fill(false));
  rectangle.forEach(rect => {
    for (let i = rect[1] * 2; i <= rect[3] * 2; i++) {
      for (let j = rect[0] * 2; j <= rect[2] * 2; j++) {
        map[i][j] = true;
      }
    }
  });

  rectangle.forEach(rect => {
    for (let i = rect[1] * 2 + 1; i < rect[3] * 2; i++) {
      for (let j = rect[0] * 2 + 1; j < rect[2] * 2; j++) {
        map[i][j] = false;
      }
    }
  });

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const pq = [[startX, startY]];
  let cnt = 0;
  while (pq.length) {
    let len = pq.length;
    for (let i = 0; i < len; i++) {
      let [curX, curY] = pq.shift();
      if (curX === endX && curY === endY) {
        return cnt/2;
      }
      map[curY][curX] = false;

      for (let d = 0; d < 4; d++) {
        let ty = curY + dy[d], tx = curX + dx[d];
        if (0<=ty&&ty<=100&&0<=tx&&tx<=100&&map[ty][tx]) { pq.push([tx, ty]); }
      }
    }
    cnt++;
  }
  return cnt/2;
}

console.log(solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8));//17
console.log(solution([[1, 1, 8, 4], [2, 2, 4, 9], [3, 6, 9, 8], [6, 3, 7, 7]], 9, 7, 6, 1));//11
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));//9
console.log(solution([[2, 1, 7, 5], [6, 4, 10, 10]], 3, 1, 7, 10));//15
console.log(solution([[2, 2, 5, 5], [1, 3, 6, 4], [3, 1, 4, 6]], 1, 4, 6, 3));//	10
console.log(solution([[2, 1, 3, 9], [1, 6, 12, 8], [7, 2, 9, 10], [4, 3, 11, 5]], 2, 8, 6, 5));//21
console.log(solution([[49, 49, 51, 51]], 49, 49, 51, 51));//4