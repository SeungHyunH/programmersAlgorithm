function solution(n, t, m, p) {
  let answer = '';
  let num = 0;
  let numlist = [];
  for(let i = 0; i < t; i++){
    while(numlist.length<answer.length*m+p){
      numlist = numlist.concat((num++).toString(n).toUpperCase().split(''));
    }
    answer = `${answer}${numlist[p+answer.length*m-1]}`;
  }
  return answer;
}

function solution(n, t, m, p) {
  const max =  (t-1)*m+p-1;
  let line = '';
  for(let i = 0; line.length<=max; i++){
    line+=changeN(n,i);
  }
  return Array.apply(null,Array(t)).map((val,idx)=>line[idx*m+p-1]).join('');
}

function changeN(n,val){
  let answer = '';
  while(true){
    let cur = val%n;
    if(cur === 10){answer ='A'+answer;}
    else if(cur === 11){answer='B'+answer;}
    else if(cur === 12){answer='C'+answer;}
    else if(cur === 13){answer='D'+answer;}
    else if(cur === 14){answer='E'+answer;}
    else if(cur === 15){answer='F'+answer;}
    else{answer = cur+answer;}
    val = Math.floor(val/n);
    if(val===0){break;}
  }
  return answer;
}
console.log(solution(2,4,2,1));
console.log(solution(16,16,2,1));
console.log(solution(16,16,2,2));