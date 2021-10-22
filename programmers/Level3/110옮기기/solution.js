function solution(s) {
  var answer = [];
  s.forEach(el=>{
    const stack = [];
    let count = 0;
    for(let i = 0; i < el.length; i++){
      let third = el[i];
      if(stack.length>1){
        let second = stack.pop();
        let first = stack.pop();
        if(first==='1'&&second==='1'&&third==='0'){
          count++;
          continue;
        }else{
          stack.push(first,second,third);
        }
      }else{
        stack.push(third);
      }
    }
    let idx = -1;
    for(let i = stack.length-1; i>=0; i--){
      if(stack[i]==='0'){idx=i+1;break;}
    }
    if(idx<0){answer.push(`${'110'.repeat(count)}${stack.join('')}`);}
    else{answer.push(`${stack.slice(0,idx).join('')}${'110'.repeat(count)}${stack.slice(idx,stack.length).join('')}`)}
  });
  return answer;
}
console.log(solution(["1110", "100111100", "0111111010"]));//	["1101", "100110110", "0110110111"]
console.log(solution(["1100111011101001"]));//['0101101101101101']