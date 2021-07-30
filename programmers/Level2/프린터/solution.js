function solution(priorities, location) {
  let maxPriorities = priorities.slice().sort((a,b)=>a-b);
  let cnt = 0;
  while(priorities.length != 0){
    if(priorities[0]<maxPriorities[maxPriorities.length-1]){
      location = (location === 0) ? priorities.length-1 : location-1;
      priorities.push(priorities.shift());
    }
    else{
      cnt+=1;
      if(location === 0){break;}
      else{
        priorities.shift();
        maxPriorities.pop();
        location-=1;
      }
    }
  }
  return cnt;
}

let result = solution([2, 1, 3, 2],2);
console.log(result)//1
result = solution([1, 1, 9, 1, 1, 1],0);
console.log(result)//5