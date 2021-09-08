function solution(n, arr1, arr2) {
  return Array.apply(null,Array(n)).map((val,idx)=>{
    let cur = (arr1[idx]|arr2[idx]).toString(2);
    while(cur.length<n){cur = ' '+cur;}
    return cur.replace(/1/g,'#').replace(/0/g,' ');
  });
}

console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]));
console.log(solution(6,[46, 33, 33 ,22, 31, 50],	[27 ,56, 19, 14, 14, 10]));