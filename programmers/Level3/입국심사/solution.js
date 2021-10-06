function solution(n, times) {
  times.sort((a,b)=>a-b);
  let start = 0;
  let end = times[times.length-1]*n;
  let mid = Math.floor((start+end)/2);
  while(start<=end){
    let cnt = 0;
    times.forEach(time=>{
      cnt+=Math.floor(mid/time);
      if(cnt>=n){return;}
    });
    if(cnt >= n){end = mid-1;}
    else{start = mid+1;}
    mid = Math.floor((start+end)/2);
  }
  return start;
}

console.log(solution(6, [7, 10]));//28