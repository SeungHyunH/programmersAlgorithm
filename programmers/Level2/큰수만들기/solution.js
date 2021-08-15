function solution(number, k) {
  let stack = [];
  for(let i = 0; i < number.length; i++){
    let cur = number[i];
    while(k && stack.length !== 0 && stack[stack.length-1]<cur){
      stack.pop();
      k--;
    }
    stack.push(cur);
  }
  return (k === 0) ? stack.join('') : stack.join('').slice(0,stack.length-k);
}

function solution2(number, k) {
  let answer = '';
  number = number.split('').map(val => +val);
  for(let i = 0; i < number.length; i++){
    let cur = number[i];
    let flag = false;
    for(let j = i+1; (j <= i+k && j<number.length); j++){
      if(cur < number[j]){flag = true;k-=1;break;}
    }
    if(!flag){answer += (cur+'');}
  }
  return (k === 0) ? answer : answer.slice(0,answer.length-k);
}
console.log(solution2("1924",2));//"94"
console.log(solution2("1231234",3));//"3234"
console.log(solution2("4177252841",4));//"775841"
console.log(solution2("1000", 1));//"100"