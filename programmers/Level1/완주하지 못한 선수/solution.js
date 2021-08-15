function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            return answer;
        }
    }
}

//테스트케이스
let result1 = solution(["leo", "kiki", "eden"],["eden", "kiki"]);
let result2 = solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]);
let result3 =solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]);
console.log(result1,result2,result3);