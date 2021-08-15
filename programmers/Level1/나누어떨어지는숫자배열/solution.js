function solution(arr, divisor) {
    var answer = [];
    arr.forEach(num=>{
      if(num%divisor === 0){answer.push(num);}
    });
    return (answer.length === 0) ? [-1] : answer.sort((a,b)=>{return a-b;});
}

let result = solution([5, 9, 7, 10],5);
console.log(result);//[5, 10]
result = solution([2, 36, 1, 3],1);
console.log(result);//[1, 2, 3, 36]
result = solution([3,2,6],10);
console.log(result);//[-1]