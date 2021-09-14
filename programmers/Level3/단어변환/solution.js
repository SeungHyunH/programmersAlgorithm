function solution(begin, target, words) {
  var answer = 0;
  const pq = [begin];
  const visited = {};
  while (pq.length) {
    let len = pq.length;
    for (let t = 0; t < len; t++) {
      let cur = pq.shift();
      if (cur === target) { return answer; }
      visited[cur] = true;
      for (let i = 0; i < words.length; i++) {
        if (visited[words[i]] === true) { continue; }
        let cnt = 0;
        for (let j = 0; j < words[i].length; j++) {
          if (cur[j] !== words[i][j]) { cnt++; }
        }
        if (cnt === 1) { pq.push(words[i]); }
      }
    }
    answer++;
  }
  return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));//4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));//0