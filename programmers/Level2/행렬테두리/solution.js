function solution(rows, columns, queries) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 1; j <= columns; j++) {
      temp.push(i * columns + j);
    }
    arr.push(temp);
  }
  let answer = [];
  queries.forEach(function (query) {
    let [x1, y1, x2, y2] = query;
    let minValue = 10001;

    let cur1 = arr[x1 - 1][y1 - 1];
    arr[x1 - 1][y1 - 1] = arr[x1][y1 - 1];
    let cur2 = arr[x2 - 1][y2 - 1];
    arr[x2 - 1][y2 - 1] = arr[x2 - 2][y2 - 1];

    for (let [i, j] = [y1, y2 - 2]; i < y2; i++) {
      minValue = Math.min(cur1,cur2,minValue);

      let temp = cur1;
      cur1 = arr[x1 - 1][i];
      arr[x1 - 1][i] = temp;

      temp = cur2;
      cur2 = arr[x2 - 1][j];
      arr[x2 - 1][j] = temp;

      j--
    }
    for (let [i, j] = [x1, x2 - 2]; i < x2; i++) {
      minValue = Math.min(cur1,cur2,minValue);

      let temp = cur1;
      cur1 = arr[i][y2 - 1];
      arr[i][y2 - 1] = temp;

      temp = cur2;
      cur2 = arr[j][y1 - 1];
      arr[j][y1 - 1] = temp;

      j--
    }
    answer.push(minValue);
  });
  return answer;
}

console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]));//[8, 10, 25]
console.log(solution(3, 3, [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]));//[1, 1, 5, 3]
console.log(solution(100,97,[[1,1,100,97]]));//[1]