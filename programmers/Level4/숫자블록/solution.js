function solution(begin, end) {
  let answer = [];
  function GetBlock(num){
    if(num < 2){return 1;}
    for(let i = 2; i*i <= num; i++){
      if(num%i===0){
        let quo = num/i;
        if(quo<=10000000){return quo;}
      }
    }
    return 1;
  }
  for(let i = begin; i < end+1; i++){
    if(i ===1){answer.push(0);continue;}
    answer.push(GetBlock(i));
  }
  return answer;
}
console.log(solution(1, 10));//	[0, 1, 1, 2, 1, 3, 1, 4, 3, 5]