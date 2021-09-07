function solution(table, languages, preference) {
  const LanguagePreference = {};
  for(let i = 0; i < languages.length; i++){
    LanguagePreference[languages[i]]=preference[i];
  }
  let answer = '';
  let MaxPoint = 0;
  table.forEach(list=>{
    list = list.split(' ');
    let point = 0;
    for(let i = 1; i < list.length; i++){
      if(LanguagePreference[list[i]]){
        point+=LanguagePreference[list[i]]*(6-i);
      }
    }
    if(MaxPoint<point){MaxPoint=point;answer=list[0];}
    else if(MaxPoint===point){answer = (answer<list[0]) ? answer:list[0];}
  });
  return answer;
}

console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"],["PYTHON", "C++", "SQL"],[7, 5, 5]));
console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"],["JAVA", "JAVASCRIPT"],[7, 5]));