function solution(dirs) {
  let answer = 0;
  const direction = {"U":[0,1],"D":[0,-1],"L":[-1,0],"R":[1,0]};
  const pt = [0,0];
  const stack = {};
  dirs.split('').forEach(dir=>{
    let tx = pt[0]+direction[dir][0];
    let ty = pt[1]+direction[dir][1];
    if(-5 <= tx && tx <= 5 && -5 <= ty && ty <= 5){
      const road1 = `${pt[0]}${pt[1]}${tx}${ty}`;
      const road2 = `${tx}${ty}${pt[0]}${pt[1]}`;
      if(isNaN(stack[road1])){
        stack[road1]=true;
        stack[road2]=true;
        answer++;
      }
      pt[0]=tx;
      pt[1]=ty;
    }
    
  });
  return answer;
}

console.log(solution("ULURRDLLU"));//7
console.log(solution("LULLLLLLU"));//7