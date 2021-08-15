function solution(clothes) {
  let answer = 1;
  let clothesList = {};
  clothes.forEach(cur => {
    if(!(cur[1] in clothesList)){clothesList[cur[1]]=2;}
    else{clothesList[cur[1]]+=1;}
  });
  Object.values(clothesList).forEach(val => {answer *= val});
  return answer-1;//모두 안입는 경우를 제외
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));//5
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]));//3