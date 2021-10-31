function solution(a) {
  const N = a.length;
  if (N < 2) { return 0; }
  const map = {};
  a.forEach((el, idx) => {
    if (!map[el]) {
      map[el] = [];
      if (idx > 0) { map[el].push([idx - 1, idx]); };
      if (idx + 1 < N) { map[el].push([idx, idx + 1]); }
    }
    else {
      if (map[el][map[el].length - 1][1] !== idx) { map[el].push([idx - 1, idx]); }
      if (idx + 1 < N) { map[el].push([idx, idx + 1]); }
    }
  });
  let answer = 0;
  Object.keys(map).forEach(key => {
    map[key]=map[key].filter(el=>a[el[0]]!==a[el[1]]);
    if (answer < map[key].length) {
      const counts = Array.from(Array(map[key].length), () => Array(2).fill(0));
      counts[0][0] += 1;
      for (let i = 1; i < map[key].length; i++) {
        let preMax = Math.max(counts[i - 1][0], counts[i - 1][1]);
        if (map[key][i - 1][1] === map[key][i][0]) {
          counts[i][0] += counts[i - 1][1] + 1;
          counts[i][1] += preMax;
        } else {
          counts[i][0] += preMax + 1;
          counts[i][1] += preMax;
        }
      }
      answer = Math.max(answer, counts[counts.length - 1][0], counts[counts.length - 1][1]);
    }
  });
  return answer * 2;
}

function solution(a) {
  let answer = 0;
  const counts = a.reduce((acc,cur)=>{
    acc[cur] ? acc[cur][1]++ : acc[cur] = [cur, 1];
    return acc;
  },[]).filter(el => el).sort((a, b) => b[1] - a[1]);

  for(let i = 0; i < counts.length; i++) {
    if(answer >= counts[i][1]) continue;

    let count = 0;
    for(let j = 0; j < a.length-1; j++) {
      if(a[j] === a[j+1]) continue;
      if(a[j] !== counts[i][0] && a[j+1] !== counts[i][0]) continue;
      
      count++;
      j++;
    }
    
    answer = Math.max(answer, count);
  }
  
  return answer * 2;
}

console.log(solution([0]));//0
console.log(solution([5, 2, 3, 3, 5, 3]));//4
console.log(solution([0, 3, 3, 0, 7, 2, 0, 2, 2, 0]));//8
console.log(solution([2, 3, 4, 1, 1, 1, 1, 5, 6, 7]));//4