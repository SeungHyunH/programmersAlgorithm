function solution(expression) {
  var answer = [];
  function Myeval(exp){
    return new Function('return '+exp)();
  }
  expression = expression.split(/(\D)/);
  const prior = [
    ['*','+','-'],
    ['*','-','+'],
    ['+','*','-'],
    ['+','-','*'],
    ['-','+','*'],
    ['-','*','+'],
  ];

  for(let operations of prior){
    const arr = [...expression];
    for(let op of operations){
      while(arr.includes(op)){
        const idx = arr.indexOf(op);
        arr.splice(idx-1,3,Myeval(arr.slice(idx-1,idx+2).join('')));
      }
    }
    answer.push(Math.abs(arr[0]));
  }
  return Math.max(...answer);
}

console.log(solution("100-200*300-500+20"));//60420
console.log(solution("50*6-3*2"));//300
