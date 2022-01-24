function solution(n, info) {
  let maxDiff = 0;
  let answer = Array(11).fill(0);
  let stack = [[n, 0, []]];
  while (stack.length !== 0) {
    let [count, depth, rionInfo] = stack.pop();
    if (depth === 11 || count === 0) {//종료조건
      for (let i = rionInfo.length; i < 11; i++) { rionInfo.push(0); }//0채우기
      rionInfo[10] = count;//횟수가 남은 경우 마지막점수에 할당

      let pitch = 0, rion = 0;
      for (let i = 0; i <= 10; i++) {
        if (rionInfo[i] > info[i]) { rion += 10 - i; }//라이언이 피치보다 더 많이 맞췄으면 라이언에게 점수할당
        else {
          if (info[i] !== 0) { pitch += 10 - i; } //피치의 맞춘 횟수가 0이 아니고 라이언과 같거나 더 많이맞추면 피치에게 점수할당
        }
      }
      let diff = rion - pitch;//점수차이

      if (diff > maxDiff) {//점수차이가 최대점수가 높다면 갱신
        maxDiff = diff;
        answer = rionInfo;
      } else if (diff === maxDiff) {//같은 경우 
        for (let i = 10; i >= 0; i--) {//제일 작은 점수에서 맞춘경우를 채택
          if (answer[i] < rionInfo[i]) {
            maxDiff = diff;
            answer = rionInfo;
            break;
          }
          else if (answer[i] > rionInfo[i]) { break; }
        }
      }
      continue;//점수계산이 끝났다면 stack에 집어넣지않도록 continue
    }
    if (count >= info[depth] + 1) { stack.push([count - info[depth] - 1, depth + 1, [...rionInfo, info[depth] + 1]]); }//라이언이 점수를 획득하는 경우
    stack.push([count, depth + 1, [...rionInfo, 0]]);//라이언이 점수를 포기하는 경우
  }
  return maxDiff ? answer : [-1];//최대차이가0이라면 라이언이 이기는 경우가 없으므로 -1을 반환
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));//	[0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0]
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));//	[-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));//	[1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));//	[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2]