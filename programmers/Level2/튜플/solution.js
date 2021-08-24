function solution(s) {
  var answer = [];
  JSON.parse(s.replace(/{/g,'[').replace(/}/g,']')).sort((a,b)=>a.length - b.length).forEach(function(list){
    list.forEach(function(s){
      s = +s;
      if(!answer.includes(s)){
        answer.push(s);
      }
    });
  });
  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));//	[2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));//	[2, 1, 3, 4]
console.log(solution("{{20,111},{111}}"));//[111, 20]
console.log(solution("{{123}}"));//[123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));//[3, 2, 4, 1]