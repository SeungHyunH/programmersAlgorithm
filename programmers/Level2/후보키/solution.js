function solution(relation) {
  const cols = relation[0].length;
  const check = 1<<cols;
  const answer = new Set();
  for(let i = 1; i < check; i++){
    let temp = relation.map(x=>x.filter((_,col)=>i&(1<<col)).join(''));
    if(temp.length === new Set(temp).size){answer.add(i);}
  }

  for(let x of answer){
    for(let y of answer){
      if(x >= y){continue;}
      if((x&y)===x){answer.delete(y);}
    }
  }
  return answer.size;
}

console.log(solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]));//2

console.log(solution([['a', 1, 'aaa', 'c', 'ng'], ['b', 1, 'bbb', 'c', 'g'], ['c', 1, 'aaa', 'd', 'ng'], ['d', 2, 'bbb', 'd', 'ng']]));//3  (0),(2,3),(1,3,4)