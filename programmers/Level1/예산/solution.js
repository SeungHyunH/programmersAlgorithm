function solution(d, budget) {
    let answer = 0;
    let acc = 0;
    d.sort((a,b)=> a-b);
    for(let i = 0; i < d.length; i++){
      acc+=d[i];
      if(acc>budget){break;}
      else{answer+=1;}
    }
    return answer;
}

let result = solution([1,3,2,5,4],9);
console.log(result);//3
result = solution([2,2,3,3],10);
console.log(result);//4