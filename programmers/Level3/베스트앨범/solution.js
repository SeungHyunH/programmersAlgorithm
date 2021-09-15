function solution(genres, plays) {
  var answer = [];
  const classify = {};
  for(let i = 0; i < genres.length; i++){
    if(classify[genres[i]]===undefined){
      classify[genres[i]] = [plays[i],[plays[i],i]];
    }else{
      classify[genres[i]][0]+=plays[i];
      classify[genres[i]].push([plays[i],i]);
    }
  }
  Object.keys(classify).sort((a,b)=>classify[b][0]-classify[a][0]).forEach(key=>{
    classify[key].shift();
    classify[key].sort((a,b)=>b[0]-a[0]);
    for(let i = 0; i < 2; i++){
      if(classify[key].length===0){break;}
      answer.push(classify[key].shift()[1]);
    }
  });
  return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]));//[4, 1, 3, 0]
console.log(solution(['A', 'B', 'C'], [1, 2, 3]));//[2, 1, 0]
