function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let arr = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        arr += arr1[i][k] * arr2[k][j];
      }
      temp.push(arr);
    }
    answer.push(temp);
  }
  return answer;
}

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));//	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
console.log(solution(	[[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));//	[[15, 15], [15, 15], [15, 15]]