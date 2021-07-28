function solution(s) {
  if(s.length%2!=0){return 0;}
  let stack = [];
  for(let i = 0 ; i < s.length; i++){
    if(s[i] === stack[stack.length-1]){stack.pop();}
    else{stack.push(s[i]);}
  }
  return stack.length === 0 ? 1 : 0;
}

let result = solution('baabaa');
console.log(result);//1
result = solution('cdcd');
console.log(result);//0