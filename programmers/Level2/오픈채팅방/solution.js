function solution(record) {
  let answer = [];
  let id = {};
  record.forEach(function(str){
    str = str.split(' ');
    if(str[0] === 'Enter'){
      answer.push(['님이 들어왔습니다.',str[1]]);
      id[str[1]]=str[2];
    }else if(str[0] === 'Leave'){
      answer.push(["님이 나갔습니다.",str[1]]);
    }else{
      id[str[1]]=str[2];
    }
  });

  return answer.map(function(str){
    return id[str[1]]+str[0];
  });
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]