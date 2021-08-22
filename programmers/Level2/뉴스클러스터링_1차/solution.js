function solution(str1, str2) {
  let reg = /^[a-zA-Z]*$/;//정규식 : 문자가 아닌 것
  let group1 = {};
  let group2 = {};

  for(let i = 0; i < str1.length-1; i++){
    let str = str1[i]+str1[i+1];//두글자씩 체크
    if(reg.test(str)){//문자가 아닌 것이 있는지 체크
      str = str.toUpperCase();//대문자로 통일
      group1[str] = isNaN(group1[str]) ? 1 : group1[str]+1;
    }
  }
  for(let i = 0; i < str2.length-1; i++){
    let str = str2[i]+str2[i+1];
    if(reg.test(str)){
      str = str.toUpperCase();
      group2[str] = isNaN(group2[str]) ? 1 : group2[str]+1;
    }
  }

  if(Object.keys(group1).length===0 && Object.keys(group2).length===0){return 65536;}//둘 다 0이면 나눌 수 없으므로 1로 판정

  let intersect = 0;//교집합
  let union = 0;//합집합
  for(let key in group1){
    let len = isNaN(group2[key]) ? 0 : group2[key];
    intersect += Math.min(group1[key],len);
    union += Math.max(group1[key],len);
  }
  for(let key in group2){
    if(isNaN(group1[key])){//grup1에 없는 group2의 값
      union+=group2[key];
    }
  }
  return parseInt(intersect/union*65536);
}

console.log(solution("FRANCE","french"));//16384
console.log(solution("handshake","shake hands"));//65536
console.log(solution("aa1+aa2","AAAA12"));//43690
console.log(solution("E=M*C^2","e=m*c^2"));//65536