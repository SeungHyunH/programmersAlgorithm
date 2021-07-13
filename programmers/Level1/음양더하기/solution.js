function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < absolutes.length; i++){
      if(!signs[i]){absolutes[i]*=-1;}
      answer+=absolutes[i];
    }
    return answer;
}

function solution2(absolutes,signs){
  return absolutes.reduce((acc,val,i) => acc + (val * (signs[i] ? 1 : -1)),0);
}

//테스트 코드
let result = solution2([4,7,12],[true,false,true]);
console.log(result);
result = solution2([1,2,3],[false,false,true]);
console.log(result);