function solution(stones, k) {
  var answer = 0;
  const N = stones.length;
  let left = 1;
  let right = 200000000;
  while(left<=right){
    let mid = Math.floor((left+right)/2);
    let flag = false;
    for(let i = 0,cnt = 1; i < N; i++,cnt++){
      if(stones[i] > mid){cnt = 0;}
      if(cnt === k){
        flag = true;
        break;
      }
    }
    flag ? right = mid-1 : left = mid+1;
  }

  return left;
}

console.log(solution(	[2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));//3