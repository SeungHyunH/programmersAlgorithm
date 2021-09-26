function solution(n, works) {
  var answer = 0;
  const binarySearch = (cur)=>{
    let start = 0;
    let end = works.length;
    let mid;
    while(start<=end){
      mid = Math.floor((start+end)/2);
      if(works[mid]<cur){
        start = mid+1;
      }else{
        end = mid-1;
      }
    }
    works.splice(start,0,cur);
  }
  works.sort((a,b)=>a-b);
  while(n-->0){
    const cur = works.pop()-1;
    if(cur<=0){works.unshift(0);continue;}
    binarySearch(cur);
  }
  return works.reduce((acc,cur)=>acc+cur*cur,0);
}

console.log(solution(4,[4, 3, 3]));//12
console.log(solution(1,[2, 1, 2]));//6
console.log(solution(9, [1, 1, 1]));//0