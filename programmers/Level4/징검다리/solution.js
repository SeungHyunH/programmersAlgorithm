function solution(distance, rocks, n) {
  rocks.sort((a,b)=>a-b);
  let subDistance = [rocks[0]];
  for(let i = 1; i < rocks.length; i++){
    subDistance.push(rocks[i]-rocks[i-1]);
  }
  subDistance.push(distance-rocks[rocks.length-1]);
  
  let left = 1;
  let right = distance;
  let mid = Math.floor((left+right)/2);
  while(left<=right){
    let removed = 0;
    let cur = 0;
    for(let i = 0; i < subDistance.length; i++){
      cur+=subDistance[i];
      cur < mid ? removed++:cur=0;
    }
    removed > n ? right = mid-1:left = mid+1;
    mid = Math.floor((left+right)/2);
  }

  return mid;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2))//4