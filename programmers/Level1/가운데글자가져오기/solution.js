function solution(s) {
    return s.length%2 === 0 ? s.slice(s.length/2-1,s.length/2+1) : s[Math.floor(s.length/2)];
}

let result = solution("abcde");
console.log(result);//"c"
result = solution("qwer");
console.log(result);//"we"