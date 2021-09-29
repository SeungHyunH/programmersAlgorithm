function solution(sizes) {
  const answer = [0,0];
  sizes.forEach(el=>{
    el.sort((a,b)=>b-a);
    answer[0]=Math.max(answer[0],el[0]);
    answer[1]=Math.max(answer[1],el[1]);
  });
  return answer[0]*answer[1];
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));//4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));//120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));//133