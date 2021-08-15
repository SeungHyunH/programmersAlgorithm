function solution(numbers, target) {
  let answer = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) { answer+=1; }
      return;
    }
    dfs(depth+1, sum + numbers[depth]);
    dfs(depth+1, sum - numbers[depth]);
  }

  dfs(0, 0);

  return answer;
}

let result = solution([1, 1, 1, 1, 1], 3);
console.log(result);