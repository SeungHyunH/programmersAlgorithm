function solution(tickets) {
  const answer = [];
  const visited = Array.from(Array(tickets.length),()=>false);
  const total = tickets.length;
  tickets.sort();
  const dfs = (node,count) =>{
    answer.push(node);
    if(count === total){return true;}
    let idx = 0;
    for(;idx<total&&tickets[idx][0]!==node; idx++){}
    for(;idx<total&&tickets[idx][0]===node; idx++){
      if(!visited[idx]){
        visited[idx]=true;
        if(dfs(tickets[idx][1],count+1)){return true};
        visited[idx]=false;
      }
    }
    answer.pop();
    return false;
  };
  dfs("ICN",0);
  return answer;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));//["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]));//["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
console.log(solution([["ICN", "BBB"], ["ICN", "CCC"], ["BBB", "CCC"], ["CCC", "BBB"], ["CCC", "ICN"]]));//["ICN", "BBB", "CCC", "ICN", "CCC", "BBB"]