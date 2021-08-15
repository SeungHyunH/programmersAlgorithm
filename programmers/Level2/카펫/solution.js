function solution(brown, yellow) {
  var answer = [];
  let total = (brown-4)/2;//Yellows_width+height
  for(let height = 1; height <= total/2; height++){
    if(yellow === height*(total-height)){
      return [total-height+2,height+2];
    }
  }
}

console.log(solution(10,2));//[4, 3]
console.log(solution(8,1));//[3, 3]
console.log(solution(24,24));//[8, 6]