function solution(m, musicinfos) {
  let answer = '(None)'
  let ansTime = 0;
  m = m.replace(/\w#/g,letter=>letter[0].toLowerCase());
  musicinfos.forEach(info=>{
    info = info.split(',');
    const time = getTime(info[0],info[1]);
    info[3] = info[3].replace(/\w#/g,letter=>letter[0].toLowerCase());
    info[3] = (info[3].length>time) ? info[3] = info[3].slice(0,time) : info[3].repeat(Math.ceil(time/info[3].length));
    if(info[3].match(m)&&ansTime<time){
      ansTime = time;answer = info[2];
    }
  });
  return answer;
}

function getTime(a,b){
  b = b.split(':');
  a = a.split(':');
  return (b[0]-a[0])*60+(b[1]-a[1]);
}

console.log(solution("ABCDEFG",	["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));//"HELLO"
console.log(solution("CC#BCC#BCC#BCC#B",["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]));//"FOO"
console.log(solution("ABC",["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]));//"WORLD"