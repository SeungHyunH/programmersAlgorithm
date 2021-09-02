function solution(s) {
  const answer = [0,0];
  while(s!=='1'){
    ++answer[0];
    let oneCount = 0;
    for(let i = 0; i < s.length; i++){oneCount+= (s[i]==='1') ? 1:0;}
    answer[1]+=s.length-oneCount;
    s = oneCount.toString(2);
  }
  return answer;
}

function solution(s) {
  const answer = [0,0];
  while(s!=='1'){
    ++answer[0];
    let oneCount = s.match(/1/g).length;
    answer[1]+=s.length-oneCount;
    s = oneCount.toString(2);
  }
  return answer;
}
console.log(solution("110010101001"));//[3,8]
console.log(solution("01110"));//[3,3]
console.log(solution("1111111"));//[4,1]