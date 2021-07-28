function solution(x, n) {
    var answer = [];
    for(let i = 0; i < n; i++){answer.push(x+x*i);}
    return answer;
}

let result = solution(2,5);
console.log([2,4,6,8,10]);
result = solution(4,3);
console.log([4,8,12]);
result = solution(-4,2);
console.log([-4, -8]);