function solution(nums) {
    let new_nums = [];
    for(let i = 0; i < nums.length-2; i++){
      for(let j = i+1; j < nums.length-1; j++){
        for(let k = j+1; k < nums.length; k++){
          new_nums.push(nums[i]+nums[j]+nums[k]);
        }
      }
    }
    let answer = new_nums.reduce((acc,cur,idx)=>acc+isPrime(cur),0)
    return answer;
}

function isPrime(num){
  for(let i = 2; i*i<=num; i++){
    if(num%i===0){return 0;}
  }
  return 1;
}

//테스트코드
let result = solution([1,2,3,4]);
console.log('answer : '+result); //1
result = solution([1,2,7,6,4]);
console.log('answer : '+result);