function solution(user_id, banned_id) {
  // 정규식을 이용한 체크 .은 문자체크를 패스함 ^과$로 시작과 끝점을 알려서 갯수일치 판단
  // const check = (user, ban) => {
  //   const pattern = RegExp(`\^${ban.replace(/\*/g,'.')}\$`);
  //   return pattern.test(user);
  // }
  const check = (user, ban) => {//아이디 일치 체크
    if (user.length !== ban.length) { return false; }//아이디 길이가 다르면 false
    for (let i = 0; i < user.length; i++) {
      if (ban[i] === '*') { continue; }//*은 체크X
      if (ban[i] !== user[i]) { return false; }//아이디문자가 다르면 false
    }
    return true;
  }

  const candidate = {};//벤 아이디 후보들
  (new Set(banned_id)).forEach(ban => {//벤 목록중 겹치지 않는 것들
    let list = user_id.filter(user => check(user, ban));
    if (list.length) { candidate[ban] = list; }
  });

  let result = new Set();

  banned_id = banned_id.filter(ban => candidate[ban]);
  if (banned_id.length === 0) { return 1; }

  const dfs = (answer, idx) => {
    let answer_size = (new Set(answer)).size;
    if (answer_size !== answer.length) { return; }
    if (answer_size === banned_id.length) {
      result.add(answer.sort().join(''));
      return;
    }
    candidate[banned_id[idx]].forEach(val => dfs([...answer, val], idx + 1));
  }
  dfs([], 0);
  
  return result.size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]));//2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]));//2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]));//3
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["**", "", "", "", "***"]))//1
console.log(solution(["abcde", "accde", "adcde", "aecde"],
  ["ace", "ace", "***de"]))//4