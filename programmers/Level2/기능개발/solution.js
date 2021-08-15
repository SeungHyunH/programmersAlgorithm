function solution(progresses, speeds) {
    let answer = [];
    let cnt = 0;

    while(cnt < progresses.length){
      for(let i = cnt; i < progresses.length;i++){
        if(progresses[i]>=100){continue;}
        progresses[i]+=speeds[i];
      }
      if(progresses[cnt]>=100){
        let temp = 0;
        for(let i = cnt; i < progresses.length; i++){
          if(progresses[i]>=100){temp+=1;}
          else{break;}
        }
        answer.push(temp);
        cnt+=temp;
      }
    }
    return answer;
}

function solution2(progresses, speeds) {
    //남은 일수를 계산하는 풀이
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

let result = solution([93, 30, 55],[1, 30, 5]);
console.log(result);//[2, 1]
result = solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]);
console.log(result);//[1, 3, 2]