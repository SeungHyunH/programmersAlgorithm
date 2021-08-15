function solution(numbers) {
  let answer = [];
  numbers = numbers.split('');

  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) { return false; }
    }
    return num < 2 ? false : true;
  }

  function mergeNumbers(arr, str) {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }
    if (str.length > 0) {
      let cur = +str;
      if (!answer.includes(cur)) {
        if (isPrime(cur)) {
          answer.push(cur);
        }
      }
    }
  }
  mergeNumbers(numbers, "");
  return answer.length;
}

console.log(solution("17"));//3
console.log(solution("011"));//2