function solution(arr) {
  let minValue = Math.min.apply(null,arr);
  arr = arr.filter(val => val != minValue);
  return arr.length === 0 ? [-1] : arr;
}

let result = solution([4,3,2,1,1]);
console.log(result);//	[4,3,2]
result = solution([10]);
console.log(result);//[-1]