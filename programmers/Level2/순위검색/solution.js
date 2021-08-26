function solution(info, query) {
  //처음 제출했던 답(정확도 40/40 , 효율성 0/60)
  var answer = [];
  info = info.map(s => s.split(' '));
  query = query.map(s => s.replace(/ and /g, " ").split(' '));
  query.forEach(q => {
    let applicant = [...info];
    for (let i = 0; i < 4; i++) {
      if (q[i] === '-') { continue; }
      applicant = applicant.filter(ap => ap[i] === q[i]);
    }
    applicant = applicant.filter(ap => +ap[4] >= +q[4]);
    answer.push(applicant.length);
  });
  return answer;
}

function solution(info, query) {
  var answer = [];
  let infoMap = {};

  function makeInfoMap(arr,score,start){
    const key = arr.join('');
    const value = infoMap[key];

    if(value){
      infoMap[key].push(score);
    }else{
      infoMap[key]=[score];
    }

    for(let i = start; i < arr.length; i++){
      let temp = [...arr];
      temp[i]='-';
      makeInfoMap(temp,score,i+1);
    }
  }

  for(let i = 0; i < info.length; i++){
    const arr = info[i].split(' ');
    const score = +arr.pop();
    makeInfoMap(arr,score,0);
  }

  for(let key in infoMap){
    infoMap[key].sort((a,b)=>a-b);
  }

  function binarySearch(arr,score){
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
      const mid = Math.floor((end+start)/2);
      if(arr[mid]<score){
        start = mid+1;
      }else{
        end = mid-1;
      }
    }
    return start;
  }
  for(let i = 0; i < query.length; i++){
    let arr = query[i].replace(/ and /g,' ').split(' ');
    const score = +arr.pop();
    arr = arr.join('');
    if(infoMap[arr]){
      answer.push(infoMap[arr].length - binarySearch(infoMap[arr],score));
    }else{
      answer.push(0);
    }
  }
  return answer;
}

console.log(solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]));//[1,1,1,1,2,4]