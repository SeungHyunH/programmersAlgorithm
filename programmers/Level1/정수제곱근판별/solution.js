function solution(n) {
    for(let i = 1; i*i <= n; i++){
      if(i*i === n){return (i+1)*(i+1)};
    }
    return -1;
}

let result = solution(121);
console.log(result);//144
result = solution(3);
console.log(result);//-1