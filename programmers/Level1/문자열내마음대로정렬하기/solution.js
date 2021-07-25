function solution(strings, n) {
    return strings.sort(function(a,b){
      return (a[n]===b[n]) ? ((a<b) ? -1:1): ((a[n] < b[n]) ? -1:1);
    });
}
let result = solution(["sun", "bed", "car"],1);
console.log(result);//	["car", "bed", "sun"]
result = solution(["abce", "abcd", "cdx"],2);
console.log(result);//	["abcd", "abce", "cdx"]