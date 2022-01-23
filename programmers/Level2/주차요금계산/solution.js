function solution(fees, records) {
  var answer = [];
  let inOutTime = {};
  records.forEach(record=>{
    let [time,number,inOut] = record.split(' ');
    time = time.split(':');
    time = (time[0]*60)+(+time[1]);
    if(inOut==='OUT'){
      inOutTime[number][0]+=time-inOutTime[number][1];
      inOutTime[number][2]=false;
    }else{
      if(!inOutTime.hasOwnProperty(number)){inOutTime[number]=[0,time,true];}
      else{inOutTime[number][1]=time;inOutTime[number][2]=true;}
    }
  });
  Object.keys(inOutTime).sort((a,b)=>(+a)-(+b)).forEach(key=>{
    if(inOutTime[key][2]){
      inOutTime[key][0]+=1439-inOutTime[key][1];
    }
    let cost = fees[1];
    inOutTime[key][0]-=fees[0];
    if(inOutTime[key][0]>0){
      cost+=Math.ceil(inOutTime[key][0]/fees[2])*fees[3];
    }
    answer.push(cost);
  });
  return answer;
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]));//	[14600, 34400, 5000]
console.log(solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]));//[0, 591]
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));//	[14841]