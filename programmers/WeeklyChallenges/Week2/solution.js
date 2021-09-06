function solution(scores) {
  const answer = Array.apply(null,Array(scores.length)).map((cur,idx)=>{
    cur = [];
    for(let i = 0; i <scores.length; i++){
      cur.push(scores[i][idx]);
    }
    return cur;
  });
  return answer.map((score,idx)=>{
    let maxS = 0;
    let minS = 100;
    let num = 0;
    let maxFlag = false;
    let minFlag = false
    for(let i = 0; i < scores.length; i++){
      if(score[i]>maxS){maxS=score[i];maxFlag = false;}
      else if(score[i]===maxS){maxFlag = true;}

      if(score[i]<minS){minS=score[i];minFlag=false;}
      else if(score[i]===minS){minFlag=true;}
      num+=score[i];
    }
    if(maxS===score[idx]&&!maxFlag){num = (num-maxS)/(score.length-1);}
    else if(minS === score[idx]&&!minFlag){num = (num-minS)/(score.length-1);}
    else{num = num/score.length;}

    if(num>=90){return 'A';}
    else if(num>=80){return 'B';}
    else if(num>=70){return 'C';}
    else if(num>=50){return 'D';}
    else{return 'F';}
  }).join('');
}

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]));
console.log(solution([[50,90],[50,87]]));
console.log(solution([[70,49,90],[68,50,38],[73,31,100]]));