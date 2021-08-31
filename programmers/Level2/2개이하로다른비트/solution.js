function solution(numbers) {
  var answer = [];
  function DiffNum(num){
    if(num%2===0){return num+1;}
    else{
      num = num.toString(2).split('').reverse().join('');
      if(/10/.test(num)){
        num = num.replace(/10/,'01').split('').reverse().join('');
      }else{
        num = num.replace(/1/,'10');
      }
    }
    return parseInt(num,2);
  }
  numbers.forEach(val=>answer.push(DiffNum(val)));
  return answer;
}

function solution(numbers) {
  var answer = [];
  function DiffNum(num){
    if(num%2===0){return num+1;}
    else{
      num = num.toString(2).split('');
      let idx = num.lastIndexOf('0');
      if(idx !== -1){
        num[idx]='1';
        num[idx+1]='0';
        num = parseInt(num.join(''),2);
      }else{
        num[0]='0';
        num = parseInt('1'+num.join(''),2);
      }
    }
    return num;
  }
  numbers.forEach(val=>answer.push(DiffNum(val)));
  return answer;
}

function solution(numbers) {
  var answer = [];
  function DiffNum(num){
    if(num%2===0){return num+1;}
    else{
      num = "0"+num.toString(2);
      let idx = num.lastIndexOf("0");
      
      //템플릿 리터럴
      return parseInt(`${num.slice(0,idx)}10${num.slice(idx+2)}`,2);
    }
    return num;
  }
  numbers.forEach(val=>answer.push(DiffNum(val)));
  return answer;
}
console.log(solution([2,7,9,11,13]));//[3,11]