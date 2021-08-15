function solution(s) {
    let answer = s
      .replace(/zero/g,'0')
      .replace(/one/g,'1')
      .replace(/two/g,'2')
      .replace(/three/g,'3')
      .replace(/four/g,'4')
      .replace(/five/g,'5')
      .replace(/six/g,'6')
      .replace(/seven/g,'7')
      .replace(/eight/g,'8')
      .replace(/nine/g,'9');
    return parseInt(answer);
}

let result = solution("one4seveneight");
console.log(result);//1478
result = solution("23four5six7");
console.log(result);//234567
result = solution("2three45sixseven");
console.log(result);//234567
result = solution("123");
console.log(result);//123