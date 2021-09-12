function solution(jobs) {
  let len  = jobs.length;
  let answer = 0;
  let time = 0;
  const pq = [];
  jobs.sort((a,b)=>a[0]-b[0]);
  for(let i = 0; i <jobs.length||pq.length!==0;){
    if(i<jobs.length&&jobs[i][0]<=time){
      pq.push(jobs[i++]);
      pq.sort((a,b)=>a[1]-b[1]);
      continue;
    }

    if(pq.length===0){
      time=jobs[i][0];
    }else{
      const [start,work]=pq.shift();
      time+=work;
      answer+=time-start;
    }
  }
  return parseInt(answer/jobs.length);
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));//9