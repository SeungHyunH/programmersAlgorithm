function solution(n, t, m, timetable) {
  const getMinute = (time) => {
    time = time.split(':');
    return time[0] * 60 + (+time[1]);
  }
  timetable.forEach((time, idx) => timetable[idx] = getMinute(time));
  timetable.sort((a,b)=>a-b);
  const TimetoString = (time) => {
    let h = Math.floor(time / 60).toString();
    if (h.length === 1) { h = "0" + h; }

    let m = (time % 60).toString();
    if (m.length === 1) { m = "0" + m; }
    return h + ":" + m;
  }

  let time = 540;//09:00
  const pq = [];
  timetable = timetable.filter(val => {
    if (0 <= val && val <= 540) { pq.push(val); return false; }
    return true;
  });
  while (n-- >= 0) {
    if (n === 0) {
      pq.sort((a, b) => a - b);
      if (pq.length >= m) {
        return TimetoString(pq[m-1] - 1);
      } else {
        return TimetoString(time);
      }
    } else {
      for (let i = 0; i < m; i++) {
        pq.shift();
        if (pq.length === 0) { break; }
      }
      timetable = timetable.filter(val => {
        if (time <= val && val <= time + t) { pq.push(val); return false; }
        return true;
      });
      time += t;
    }
  }
  return true;
}

console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));//"09:00"
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));//"09:09"
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));//"08:59"
console.log(solution(1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"]));//"00:00"
console.log(solution(1, 1, 1, ["23:59"]));//"09:00"
console.log(solution(10, 60, 45, ["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]));//"18:00"
console.log(solution(1, 1, 5, ["0:01", "0:01", "0:01","0:01", "0:01", "0:02", "0:03", "0:04"]));// "00:00"