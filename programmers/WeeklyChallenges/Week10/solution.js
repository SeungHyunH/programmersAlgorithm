function solution(line) {
  const points = [];
  const n = line.length;
  for(let i = 0; i < n; i++){
    let [x1,y1,c1] = line[i];
    for(let j = i+1; j < n; j++){
      let [x2,y2,c2] = line[j];
      let tx = (c2*y1-c1*y2)/(x1*y2-x2*y1)
      let ty = (c2*x1-c1*x2)/(y1*x2-y2*x1)
      if(Number.isInteger(tx)&&Number.isInteger(ty)){
        points.push([tx,ty]);
      }
    }
  }
  let leftX=points[0][0];
  let rightX =points[0][0];
  let topY=points[0][1];
  let bottomY=points[0][1];
  for(let i = 1; i < points.length; i++){
    let [x,y]=points[i];
    if(leftX>x){leftX=x;}
    if(rightX<x){rightX=x;}
    if(topY<y){topY=y;}
    if(bottomY>y){bottomY=y;}
  }
  const answer = Array.from(Array(topY-bottomY+1),()=>Array(rightX-leftX+1).fill('.'));
  points.forEach(([x,y])=>{
    answer[topY-y][x-leftX]="*";
  });
  return answer.map(el=>el.join(''));
}

console.log(solution(	[[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]));//	["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
console.log(solution(	[[0, 1, -1], [1, 0, -1], [1, 0, 1]]));//	["*.*"]
console.log(solution(	[[1, -1, 0], [2, -1, 0]]));//	["*"]
console.log(solution(	[[1, -1, 0], [2, -1, 0], [4, -1, 0]]));//	["*"]
