function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
      answer.push([]);
      for(let j = 0; j < arr1[0].length; j++){
        answer[i].push(arr1[i][j]+arr2[i][j]);
      }
    }
    return answer;
}

function solution2(arr1, arr2) {
  return arr1.map((row,i)=>row.map((val,j)=>val+=arr2[i][j]));
}

let result = solution([[1,2],[2,3]],[[3,4],[5,6]]);
console.log(result);//[[4,6],[7,9]]
result = solution([[1],[2]],[[3],[4]]);
console.log(result);//[[4],[6]]