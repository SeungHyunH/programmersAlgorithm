function solution(s){
  s = s.toLowerCase().split('');
  let cntP = 0, cntY = 0;
  s.forEach(function(str){
    if(str === 'p'){cntP++;}
    else if(str === 'y'){cntY++;}
  });
  return cntP === cntY ? true : false;
}
let result = solution("pPoooyY");
console.log(result);//true
result = solution("Pyy");
console.log(result);//	false