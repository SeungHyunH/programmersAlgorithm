function solution(s) {
  var answer = 0;
  s = s.split('');
  if(check(s)){answer++;}
  for(let i = 0; i < s.length-1; i++){
    s.push(s.shift());
    if(check(s)){answer++;}
  }
  return answer;
}
function check(arr){
  let stack = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '[' || arr[i] === '{' || arr[i] === '('){
      stack.push(arr[i]);
    }else{
      if(stack.length === 0){return false;}
      let temp = stack.pop();
      if(temp === '[' && arr[i] === ']'){continue;}
      else if(temp === '{' && arr[i] === '}'){continue;}
      else if(temp === '(' && arr[i]===')'){continue;}
      else{return false;}
    }
  }
  return (stack.length === 0);
}
console.log(solution("[](){}"));//3
console.log(solution("}]()[{"));//2
console.log(solution("[)(]"));//0
console.log(solution("}}}"));//0
console.log(solution("{{{"));//0
console.log(solution("([{)}]"));//0