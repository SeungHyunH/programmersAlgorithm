function solution(citations) {
  citations.sort((a, b) => a - b);
  for(let i = citations.length-1; i >= 0; i--){
    let overCnt = citations.filter(val => i+1 <= val).length;
    if(overCnt>= i+1 && citations.length - overCnt <= i+1){
      return i+1;
    }
  }
  return 0;
}

console.log(solution([0, 0, 0]));
//0,1,3,5