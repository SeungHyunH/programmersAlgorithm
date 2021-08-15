function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
      arr.push(i);
    }
    for(let i = 1; i*i<=n; i++){
      if(arr[i]){
        let cur = arr[i];
        for(let j = cur*cur; j <=n; j+=cur){
          arr[j-1]=0;
        }
      }
    }
    let answer = arr.filter((num)=>num);
    answer.shift();
    return answer.length;
}

let result = solution(10);
console.log(result);//4
result = solution(5);
console.log(result);//3