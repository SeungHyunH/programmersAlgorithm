function solution(w, h) {
  function gcd(a,b){
    return a%b ? gcd(b,a%b):b;
  }
  return w*h-(w+h-gcd(w,h));
}

console.log(solution(8,12));//80