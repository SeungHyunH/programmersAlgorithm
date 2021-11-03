function solution(n, stations, w) {
  const STATION_RANGE = w + w + 1;
  let answer = 0;
  let start = 0;
  for (let i = 0; i < stations.length; i++) {
    let end = stations[i]-w-1;
    answer += (start<end) ? Math.ceil((end-start)/ STATION_RANGE): 0;
    start = stations[i]+w;
  }
  answer += (start < n ) ? Math.ceil((n-start) / STATION_RANGE): 0;
  return answer;
}

console.log(solution(11, [4, 11], 1));//3
console.log(solution(16, [9], 2));//3
//0 0 0 0 0 0 7 8 9 10 11 0 0 0 0 0
console.log(solution(16, [2, 5, 9], 1));//3
//1 2 3 4 5 6 0 8 9 10 0 0 0 0 0 0