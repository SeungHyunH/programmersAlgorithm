function solution(arr) {
  let dict = {};
  arr.forEach(val => {
    let idx = 2;
    let cnt = 0;
    while (val != 1) {
      if (val % idx === 0) {
        cnt++;
        val /= idx;
      } else {
        if (cnt !== 0) {
          dict[idx] = isNaN(dict[idx]) ? cnt : Math.max(dict[idx], cnt);
          cnt = 0;
        }
        idx++;
      }
    }
    if (cnt !== 0) {
      dict[idx] = isNaN(dict[idx]) ? cnt : Math.max(dict[idx], cnt);
    }
  });

  let answer = 1;
  for (const [key, value] of Object.entries(dict)) {
    answer *= Math.pow(key, value);
  }
  return answer;
}

function solution2(arr) {
  function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b
  }
  function lcm(a, b) {
    return a * b / gcd(a, b);
  }

  return arr.reduce(function (acc, cur) {
    let min = Math.min(acc, cur);
    let max = Math.max(acc, cur);
    return lcm(min, max);
  });
}

console.log(solution([2, 6, 8, 14]));//168
console.log(solution([8, 36, 14]));//2*3,3*3,7

console.log(solution2([2, 6, 8, 14]));//168
console.log(solution2([8, 36, 14]));//2*3,3*3,7