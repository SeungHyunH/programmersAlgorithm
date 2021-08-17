function solution(s) {
  let answer = s.length;
  function compressionStr(s, n) {
    let idx = 0;
    let cnt = 0;
    let str = '';
    let overlapCount = 0;
    while (idx < s.length) {
      let temp = s.slice(idx, idx + n);
      if (temp !== str) {
        if (overlapCount >= 2) {
          cnt += (overlapCount + '').length;
        }
        str = temp;
        cnt = (s.length - idx < n) ? cnt + (s.length - idx) : cnt + n;
        overlapCount = 1;
      } else {
        overlapCount++;
      }
      idx += n;
    }
    if (overlapCount >= 2) {
      cnt += (overlapCount + '').length;
    }
    return cnt;
  }
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    answer = Math.min(answer, compressionStr(s, i));
  }
  return answer;
}

console.log(solution("aabbaccc"));//7
console.log(solution("ababcdcdababcdcd"));//9
console.log(solution("abcabcdede"));//8
console.log(solution("abcabcabcabcdededededede"));//14
console.log(solution("xababcdcdababcdcd"));//17
console.log(solution("aaaaaaaaaa"));//3