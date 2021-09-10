function solution(lines) {
  var answer = 1;
  lines = lines.map(line=>{
    line = line.split(' ');
    let time = line[1].split(':');
    time = ((+time[0])*3600+(+time[1])*60+(+time[2]))*1000;
    line[2] = (line[2].slice(0,line[2].length-1))*1000;
    return [(time-line[2]+1),time];
  });
  for(let i = 0 ; i < lines.length-1; i++){
    let cnt = 1;
    let end = lines[i][1]+1000-1;
    for(let j = i+1; j < lines.length; j++){
      if(!(lines[j][1]<lines[i][1]||lines[j][0]>end)){cnt++}
    }
    answer = Math.max(answer,cnt);
  }
  return answer;
}

console.log(solution([
"2016-09-15 01:00:04.001 2.0s",
"2016-09-15 01:00:07.000 2s"
]));//1
console.log(solution([
"2016-09-15 01:00:04.002 2.0s",
"2016-09-15 01:00:07.000 2s"
]));//2
console.log(solution([
"2016-09-15 20:59:57.421 0.351s",
"2016-09-15 20:59:58.233 1.181s",
"2016-09-15 20:59:58.299 0.8s",
"2016-09-15 20:59:58.688 1.041s",
"2016-09-15 20:59:59.591 1.412s",
"2016-09-15 21:00:00.464 1.466s",
"2016-09-15 21:00:00.741 1.581s",
"2016-09-15 21:00:00.748 2.31s",
"2016-09-15 21:00:00.966 0.381s",
"2016-09-15 21:00:02.066 2.62s"
]));//7