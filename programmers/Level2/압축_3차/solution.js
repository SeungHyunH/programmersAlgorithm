function solution(msg) {
  const answer = [];
  const dict = {'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26};
  const len = msg.length;
  let max = 26;
  let idx = 0;
  let cur = '';
  while(idx<len){
    if(isNaN(dict[cur+msg[idx]])){
      answer.push(dict[cur]);
      dict[cur+msg[idx]]=++max;
      cur = '';
    }else{
      cur += msg[idx++];
    }
  }
  answer.push(dict[cur]);
  return answer;
}

console.log(solution("KAKAO"));//	[11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));//[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB"));//[1, 2, 27, 29, 28, 31, 30]