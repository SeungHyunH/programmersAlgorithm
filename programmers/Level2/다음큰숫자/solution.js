function solution(n) {
  function getOneCount(n) {
    let cnt = 0;
    n.toString(2).split('').forEach(function (val) {
      if (val === '1') { cnt++; }
    });
    return cnt;
  }
  let n_OneCount = getOneCount(n++);
  while(n_OneCount !== getOneCount(n++)){}
  return n-1;
}

function solution(n){
  let n_OneCount = n.toString(2).match(/1/g).length;
  while(n++){
    if(n_OneCount === n.toString(2).match(/1/g).length){return n;}
  }
}
console.log(solution(78));//83
console.log(solution(15));//23