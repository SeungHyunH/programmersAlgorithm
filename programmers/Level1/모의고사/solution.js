/*
  1. 1, 2, 3, 4, 5 반복
  2. 2, 1, 2, 3, 2, 4, 2, 5 반복
  3. 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 반복
*/

function solution(answers) {
    var answer = [];
    let result = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    for(let i = 0; i < 3; i++){
      let cur = 0;
      let cnt = 0;
      answers.forEach(function(ans){
        if(ans===result[i][cur]){cnt++;}
        if(cur === result[i].length-1){cur = 0;}
        else{cur++;}
      });
      answer.push({tester:i+1,count:cnt});
    }
    return answer.sort((a,b)=>(a.count === b.count) ? a.tester-b.tester : a.count - b.count).filter(ans => ans.count === answer[answer.length-1].count)
    .map(el=>el.tester);
}

let result = solution([1,2,3,4,5]);
console.log(result);//[1]
result = solution([1,3,2,4,2]	);
console.log(result);//[1,2,3]