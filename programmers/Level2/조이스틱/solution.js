function solution(name) {
  let answer = 0;
  let z = 'Z'.charCodeAt(0);
  let a = 'A'.charCodeAt(0);
  let minMove = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    let str = name[i].charCodeAt(0);
    answer += (z - str + 1 > str - a) ? str - a : z - str + 1;
  }
  for (let i = 0; i < name.length; i++) {
    if (name[i] === 'A') {
      let cntA;
      for (cntA = i + 1; cntA < name.length; cntA++) {
        if (name[cntA] !== 'A') { break; }
      }
      const left = i - 1;
      const right = name.length - cntA;
      minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
      //왼쪽이 더 길면 오른쪽부분을 갔다가 다시 왼쪽으로 움직임(왼쪽움직임을 최소화)
      //오른쪽이 더 길면 왼쪽부분을 갔다가 다시 오른쪽으로 움직임(오른쪽움직임을 최소화)

      i = cntA;//연속된 A의 길이만큼 뛰어넘음
    }
  }
  answer += minMove;
  return answer;
}

let result = solution("CANAAAAANAN");
console.log(result);//56