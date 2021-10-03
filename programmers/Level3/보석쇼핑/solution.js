function solution(gems) {
  const result_size = (new Set(gems)).size;
  const gems_size = gems.length;

  let start = 0;
  let end = 0;
  const window = new Map();
  window.set(gems[0],1);
  let answer = [0,gems_size-1];

  while(end < gems_size && start<=end){
    if(result_size === window.size){
      if(end-start<answer[1]-answer[0]){
        answer=[start,end];
      }else if(end-start === answer[1]-answer[0]){
        if(start<answer[0]-1){answer = [start,end];}
      }
      window.set(gems[start],window.get(gems[start])-1);
      if(window.get(gems[start])<=0){window.delete(gems[start]);}
      start++;
    }else{
      end++;
      window.set(gems[end],1+(window.get(gems[end])||0));
    }
  }
  return [answer[0]+1,answer[1]+1];
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));//[3, 7]
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));//[1, 3]
console.log(solution(["XYZ", "XYZ", "XYZ"]));//[1, 1]
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));//[1, 5]