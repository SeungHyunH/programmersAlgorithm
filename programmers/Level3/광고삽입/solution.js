function solution(play_time, adv_time, logs) {
  const ChangeSec = ([h,m,s])=> h*3600+m*60+s*1;
  const ChangeSTR = (time)=>{
    let h = (Math.floor(time/3600)).toString();
    let m = (Math.floor(time/60)%60).toString();
    let s = (time%60).toString();
    if(h.length===1){h = '0'+h;}
    if(m.length===1){m = '0'+m;}
    if(s.length===1){s = '0'+s;}
    return `${h}:${m}:${s}`;
  }
  play_time = ChangeSec(play_time.split(':'));
  adv_time = ChangeSec(adv_time.split(':'));
  const times = Array(play_time+1).fill(0);

  logs.forEach(log=>{
    const [start,end] = log.split('-');
    times[ChangeSec(start.split(':'))]++;
    times[ChangeSec(end.split(':'))]--;;
  });

  for(let i = 1; i <= play_time; i++){//시청자 수
    times[i]+=times[i-1];
  }
  for(let i = 1; i <= play_time; i++){//누적 시청자 수
    times[i]+=times[i-1];
  }

  let sum = times[adv_time-1];
  let idx = 0;
  for(let i = adv_time-1; i <= play_time; i++){
    if(sum < times[i]-times[i-adv_time]){
      sum = times[i]-times[i-adv_time];
      idx = i-adv_time + 1;
    }
  }
  
  return ChangeSTR(idx);
}

console.log(solution("02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:25:50-00:48:29", "00:40:31-01:00:00", "01:37:44-02:02:30", "01:30:59-01:53:29"]));//"01:30:59"
console.log(solution(	"99:59:59", "25:00:00", ["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"]));//"01:00:00"
console.log(solution(	"50:00:00", "50:00:00", ["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"]));//"00:00:00"