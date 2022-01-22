function solution(n, k) {
  const isPrime = (num) => {
    if (!num || num < 2) { return false; }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) { return false; }
    }
    return true;
  };
  let primes = {};
  let answer = 0;
  n.toString(k).split('0').forEach(num => {
    num = +num;
    if (primes[num]) { answer += 1; }
    else {
      if (isPrime(num)) { answer += 1; primes[num] = true; }
    }
  });
  return answer;
}

function solution(n, k) {
  const isPrime = (num) => {
    if (!num || num < 2) { return false; }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) { return false; }
    }
    return true;
  };
  return n.toString(k).split('0').filter(num => isPrime(+num)).length;
}

console.log(solution(437674, 3));//3
console.log(solution(110011, 10));//2