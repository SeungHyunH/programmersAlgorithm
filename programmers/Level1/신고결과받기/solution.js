function solution(id_list, report, k) {
  var answer = Array.from({length:id_list.length},()=>0);
  let id_index = {};
  let reports = {};
  id_list.forEach((id,idx)=>{
    id_index[id]=idx;
    reports[id]=[];
  })
  report = new Set(report).forEach(re=>{
    let [user,reportedUser] = re.split(' ');
    reports[reportedUser].push(user);
  });
  id_list.forEach(id=>{
    if(reports[id].length>=k){
      reports[id].forEach(re=>answer[id_index[re]]+=1);
    }
  });
  return answer;
}

let result = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);
console.log(result);
result = solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
console.log(result);