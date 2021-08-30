function solution(word) {
  let cnt = 1;
  ans = [1, 0, 0, 0, 0];
  word = word.split('').map(s => {
    if (s === 'A') { return 1; }
    else if (s === 'E') { return 2; }
    else if (s === 'I') { return 3; }
    else if (s === 'O') { return 4; }
    else if (s === 'U') { return 5; }
  });
  for (let i = word.length; i < 5; i++) {
    word.push(0);
  }
  word = word.join('');

  while (ans.join('') !== word) {
    let idx = ans.indexOf(0);
    if (idx >= 0) {
      for (; idx < 5; idx++) {
        ans[idx] = 1;
        cnt++;
        if (ans.join('') === word) { return cnt; }
      }
    }
    ans[4]++;
    if (ans[4] > 5) {
      ans[4] = 0;
      ans[3]++;
      if (ans[3] > 5) {
        ans[3] = 0;
        ans[2]++;
        if (ans[2] > 5) {
          ans[2] = 0;
          ans[1]++;
          if (ans[1] > 5) {
            ans[1] = 0;
            ans[0]++;
          }
        }
      }
    }
    cnt++;
  }
  return cnt;
}

function solution(word){
  const ALPA = {"A":0, "E":1, "I":2, "O":3, "U":4};
  const TERM = [781,156,31,6,1];
  return word.split('').map((_,i)=>ALPA[_]*TERM[i]+1).reduce((acc,cur)=>acc+cur);
}
console.log(solution("AAAAE"));//6
console.log(solution("AAAE"));//10
console.log(solution("I"));//1563
console.log(solution("EIO"));//1189