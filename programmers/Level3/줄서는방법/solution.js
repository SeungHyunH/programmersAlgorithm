function solution(n, k) {
  var answer = [];
  const arr = Array.from(Array(n),(_,i)=>i+1);
  let fact = arr.reduce((acc,val)=>acc*val,1);
  k--;
  while(answer.length!==n){
    fact = fact/arr.length;
    answer.push(...arr.splice(Math.floor(k/fact),1));
    k = k%fact;
  }
  return answer;
}

console.log(solution(3,5))//[3,1,2]
//for(let i = 1; i <= 24; i++){console.log(solution(4,i))}