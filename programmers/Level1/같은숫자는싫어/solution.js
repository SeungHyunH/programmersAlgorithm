function solution(arr)
{
    var answer = [];
    let cur = -1;
    arr.forEach(num=>{
      if(cur!= num){answer.push(num);cur = num;}
    });
    return answer;
}

function solution2(arr)
{
    return arr.filter((val,idx)=>val!=arr[idx+1]);
}

let result = solution([1,1,3,3,0,1,1]);
console.log(result);//[1,3,0,1]
result = solution([4,4,4,3,3]);
console.log(result);//[4,3]

result = solution2([1,1,3,3,0,1,1]);
console.log(result);//[1,3,0,1]
result = solution2([4,4,4,3,3]);
console.log(result);//[4,3]