function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = [];
  let cur_weight = 0;
  while(true){
    if(bridge.length!==0){//다리에 트럭이 올라가 있을 때
      let temp = [];
      for(let i = 0; i < bridge.length; i++){//모든 다리에 올라간 트럭에 대해
        if(bridge[i][1]-1 === 0){//만약 트럭이 다리를 지나갔다면
          cur_weight-=bridge[i][0];//현재 다리에 올라간 무게를 트럭의 무게만큼 감소시킴
        }else{//트럭이 다 지나가지 않았다면
          bridge[i][1]-=1;//트럭을 움직임
          temp.push(bridge[i]);//안지나간 트럭만 다리에 남김
        }
      }
      bridge = temp;
    }
    if(cur_weight+truck_weights[0]<=weight && bridge.length+1 <= bridge_length){
      //트럭수 및 무게를 비교해서 새로운 트럭이 올라갈 수 있다면
      let cur = truck_weights.shift();//다리에 올라갈 새로운 트럭
      bridge.push([cur,bridge_length]);//[무게,언제 트럭이 내려갈 지의 count]
      cur_weight+=cur; //현재 다리에 올라간 무게에 추가
    }
    answer+=1;//시간증가
    if(bridge.length===0&&truck_weights.length===0){break;}//다리 및 대기중인 트럭이 없다면 종료
  }
  return answer;
}

console.log(solution(2,10,[7,4,5,6]));//8
console.log(solution(100,100,[10]));//101
console.log(solution(100,100,[10,10,10,10,10,10,10,10,10,10]));//110