function solution(n, m) {
  let gcd = (n>=m) ? getGCD(n,m) : getGCD(m,n);
  let lcm = (n>=m) ? getLCM(n,m,gcd) : getLCM(m,n,gcd);
  return [gcd,lcm];
}

function getGCD(n,m){//유클리드호제법
  while(m != 0){
    let r = n%m;
    n = m;
    m = r;
  }
  return n;
}

function getLCM(n,m,gcd){
  return n*m/gcd;
}

let result = solution(3,12);
console.log(result);//[3, 12]
result = solution(2,5);
console.log(result);//[1, 10]