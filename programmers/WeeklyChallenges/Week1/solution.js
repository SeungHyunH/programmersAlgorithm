function solution(price, money, count) {
  const total = (count % 2 === 0) ? (price + price * count) * (count / 2) : (price + price * count) * Math.floor(count / 2) + (price + price * count) / 2;
  const answer = total - money;
  return (answer > 0) ? answer : 0;
}

console.log(solution(3,20,4));