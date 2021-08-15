function solution(a, b) {
    let WEEK = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
    let total = 0;
    for(let i = 0; i < a-1; i++){total+=MONTH[i];}
    return WEEK[(total+b)%7];
}

function solution2(a,b){
    var date = new Date(`2016-${a}-${b}`);
    return date.toString().slice(0, 3).toUpperCase();
}

let result = solution(5,24);
console.log(result);//"TUE"
result = solution2(5,24);
console.log(result);//"TUE"