function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;
  if(cacheSize===0){return cities.length*5;}//캐시사이즈가 0인 경우 전부miss
  cities.forEach(city => {
    city = city.toLowerCase();
    let idx = cache.indexOf(city);
    if (idx >= 0) {//hit
      cache.splice(idx, 1);//cache에서 해당데이터를 pop
      cache.push(city);//참조를 갱신
      time += 1;
    } else {//miss
      if (cache.length === cacheSize) {//캐시가 꽉차있을 경우
        cache.shift(0);//가장 오랫동안 참조되지 않은 데이터를 pop
        cache.push(city);
      } else {
        cache.push(city);
      }
      time += 5;
    }
  });
  return time;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));//50
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));//21
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));//60
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));//52
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));//16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));//25