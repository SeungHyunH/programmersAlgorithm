function solution2(people, limit) {
  people.sort((a,b)=>a-b);
  let small = 0;
  for(let big = people.length-1; small<big; big--){
    if(people[small]+people[big]<=limit){small++;}
  }
  return people.length-small;
}

console.log(solution2([70, 50, 80, 50], 100));//3
console.log(solution2([70, 80, 50], 100));//3

function solution(people, limit) {
  let answer = 0;
  let left = people.length;//남은사람 수
  let small = 0;//(보트에 안 탄 사람 중)몸무게가 가장 작은 사람
  let big = people.length - 1;//(보트에 안 탄 사람 중)몸무게가 가장 큰 사람
  people.sort((a, b) => a - b);
  while (left > 1) {
    if (people[small] + people[big--] > limit) {
      //두 사람의 무게가 제한무게보다 더 클 때는 한명이 보트한개만 사용
      left--;
    } else {
      //제한무게보다 더 작다면 두명이서 보트사용
      small++;
      left -= 2;
    }
    answer++;
  }
  return (left === 1) ? answer + 1 : answer;
}

console.log(solution([70, 50, 80, 50], 100));//3
console.log(solution([70, 80, 50], 100));//3