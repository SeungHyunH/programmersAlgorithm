function solution(s) {
  return s.split(' ').map(val=>
    val.charAt(0).toUpperCase()+val.slice(1).toLowerCase()
  ).join(' ');
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));