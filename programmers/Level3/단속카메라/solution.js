function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[0] - b[0]);
  let out = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (out < routes[i][0]) {
      answer++;
      out = routes[i][1];
    }else if (out > routes[i][1]) {
      out = routes[i][1];
    }
  }
  return answer;
}

  console.log(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]));//2
  console.log(solution([[-2, -1], [1, 2], [-3, 0]])) //2
  console.log(solution([[0, 0],])) //1
  console.log(solution([[0, 1], [0, 1], [1, 2]])) //1
  console.log(solution([[0, 1], [2, 3], [4, 5], [6, 7]])) //4
  console.log(solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]])) //2
  console.log(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]])) //2
  console.log(solution([[-20, 15], [-20, -15], [-14, -5], [-18, -13], [-5, -3]])) //2