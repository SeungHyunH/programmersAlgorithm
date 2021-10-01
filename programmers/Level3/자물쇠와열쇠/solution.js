function solution(key, lock) {
  const N = lock.length;
  const M = key.length;

  const check_key = () => {
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < M; j++) {
        if (key[i][j] === 1) { return true; }
      }
    }
    return false;
  }
  
  if(!check_key()){return false;}

  let groove_count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (lock[i][j] === 0) { groove_count++; }
    }
  }
  if (groove_count === 0) { return true; }

  const rotate = () => {
    let temp = Array.from(Array(M), () => Array(M));
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < M; j++) {
        temp[j][M - i - 1] = key[i][j];
      }
    }
    key = temp;
  }

  const check = (ty, tx) => {
    let cnt = 0;
    for (let i = 0; i < M; i++) {
      if (0 > i + ty || i + ty >= N) { continue; }
      for (let j = 0; j < M; j++) {
        if (0 > j + tx || j + tx >= N) { continue; }
        if (lock[i + ty][j + tx] === 1 && key[i][j] === 1) { return false; }//둘 다 돌기면 안됨
        if (lock[i + ty][j + tx] === 0 && key[i][j] === 1) { cnt++; }
      }
    }
    return groove_count === cnt;
  }

  for (let i = 0; i < 4; i++) {
    for (let i = -N; i <= N; i++) {
      for (let j = -N; j <= N; j++) {
        if (check(i, j)) { return true; }
      }
    }
    rotate(key);
  }
  return false;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));//true