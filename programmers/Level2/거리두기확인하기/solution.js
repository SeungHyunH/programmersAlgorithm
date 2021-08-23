function solution(places) {
  var answer = [];
  let distanceOne = [[1,0],[0,1],[-1,0],[0,-1]];
  let distanceDiagonal = [[1,1],[1,-1],[-1,1],[-1,-1]];
  places.forEach(function(place){
    place = place.map(p=>p.split(''));
    let xLen = place.length;
    let yLen = place[0].length;

    for(let i = 0; i < xLen; i++){
      for(let j = 0; j < yLen; j++){
        if(place[i][j]==='P'){
          //응시자의 맨허튼 거리가 1인경우 
          for(let d of distanceOne){
            let x = i+d[0];
            let y = j+d[1];
            if(x >= 0 && x < xLen && y >= 0 && y<yLen && place[x][y]==='P'){
              answer.push(0);
              return;
            }
          };

          //응시자간의 거리가 2이고 직선에 있는 경우
          for(let d of distanceOne){
            let x = i+d[0]*2;
            let y = j+d[1]*2;
            if(x >= 0 && x < xLen && y >= 0 && y<yLen && place[x][y]==='P' && place[i+d[0]][j+d[1]]==='O'){
              answer.push(0);
              return;
            }
          };

          //응시자가 대각선에 위치한 경우
          for(let d of distanceDiagonal){
            let x = i+d[0];
            let y = j+d[1];
            if(x >= 0 && x < xLen && y >= 0 && y<yLen && place[x][y]==='P'){
              if(place[x][j] === 'O' ||place[i][y] === 'O'){
                answer.push(0);
                return;
              }
            }
          }
        }
      }
    }
    answer.push(1);
  });
  return answer;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));//[1, 0, 1, 1, 1]