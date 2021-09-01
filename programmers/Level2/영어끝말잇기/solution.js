function solution(n, words) {
  const wordsList = {};
  let before = words[0][0];
  for(let i = 0; i < words.length; i++){
    const key = words[i][0];
    const value = words[i];

    if(key !== before){//직전의 마지막글자와 첫글자를 비교
      return [i%n+1,Math.ceil((i+1)/n)];
    }

    if(wordsList[key]){
      if(wordsList[key].includes(value)){//이전에 사용한 단어를 사용했을 때
        return [i%n+1,Math.ceil((i+1)/n)];
      }else{
        wordsList[key].push(value);
      }
    }else{
      wordsList[key]=[value];
    }

    before = value[value.length-1];//마지막글자를 갱신
  }
  return [0,0];
}

function solution(n, words) {
  const wordsList = [words[0]];//사용한 단어들
  for(let i = 1; i < words.length; i++){
    if(words[i-1][words[i-1].length-1]!==words[i][0]){//이전단어의 마지막글자와 현재단어의 첫글자를 비교
      return [i%n+1,Math.ceil((i+1)/n)];
    }
    if(wordsList.includes(words[i])){//중복사용
      return [i%n+1,Math.ceil((i+1)/n)];
    }
    wordsList.push(words[i]);
  }
  return [0,0];
}
console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"]));