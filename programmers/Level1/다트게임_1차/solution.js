function solution(dartResult) {
  const answer = [];
  const nums = dartResult.match(/(\d+)/g);//점수배열
  for(let i = 0; i < dartResult.length; i++){
    i+=nums[0].length-1;//index를 자리수만큼 증가
    let cur = +nums.shift(); //현재값

    //보너스
    if(dartResult[i+1]==='D'){
      cur = Math.pow(cur,2); 
    }else if(dartResult[i+1]==='T'){
      cur = Math.pow(cur,3);
    }
    i++;
    
    //옵션
    if(dartResult[i+1]==='*'){
      if(answer.length!==0){
        answer[answer.length-1]*=2;
      }
      cur*=2;
      i++;
    }else if(dartResult[i+1]==='#'){
      cur*=-1;
      i++;
    }
    answer.push(cur);
  }
  return answer.reduce((acc,cur)=>acc+cur);
}

console.log(solution("1S2D*3T"));//37
console.log(solution("1D2S#10S"));//9
console.log(solution("1D2S0T"));//3
console.log(solution("1S*2T*3S"));//23
console.log(solution("1D#2S*3S"));//5
console.log(solution("1T2D3D#"));//-4
console.log(solution("1D2S3T*"));//59