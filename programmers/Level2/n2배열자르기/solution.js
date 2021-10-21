function solution(n, left, right) {
  var answer = [];
  let count = Math.floor(left/n);
  for(let i = left,j = left%n; i <= right; i++,j++){
    if(j === n){count++;j=0;}
    if(count > j){answer.push(count+1);}
    else{answer.push(j+1);}
  }
  return answer;
}

console.log(solution(3, 2, 5));//[3, 2, 2, 3]
console.log(solution(4, 7, 14));//[4, 3, 3, 3, 4, 4, 4, 4]