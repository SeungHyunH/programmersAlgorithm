function solution(seoul) {
  for(let i = 0; i < seoul.length; i++){
    if(seoul[i]==="Kim"){return "김서방은 "+i+"에 있다";}
  }
}

let result = solution(["Jane", "Kim"]);
console.log(result);//"김서방은 1에 있다"