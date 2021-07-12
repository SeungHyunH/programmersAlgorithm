function solution(a, b) {
    return a.reduce((acc,_,i)=>acc+=a[i]*b[i],0);
}

function solution2(a, b) {
    let answer = 0;
    for(let i = 0; i < a.length; i++){
        answer+=a[i]*b[i];
    }
    return answer;
}

let result1 = solution([1,2,3,4],[-3,-1,0,2]);
let result2 = solution([-1,0,1],[1,0,-1]);
console.log(result1,result2);

result1 = solution2([1,2,3,4],[-3,-1,0,2]);
result2 = solution2([-1,0,1],[1,0,-1]);
console.log(result1,result2);