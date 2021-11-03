function solution(A, B) {
  B.sort((a,b)=>a-b);
  A.sort((a,b)=>a-b);
  const binarySearch = (n)=>{
    let start = 0;
    let end = B.length;
    while(start<=end){
      let mid = Math.floor((start+end)/2);
      if(n<B[mid]){
        end = mid-1;
      }else{
        start = mid+1;
      }
    }
    return (B.length<=start || B[start]===-1) ? -1:start;
  }
  let cnt = 0;
  A.forEach(n=>{
    let idx = binarySearch(n);
    if(idx>=0){B[idx]=-1;cnt++;}
  });
  return cnt;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));//3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));//0