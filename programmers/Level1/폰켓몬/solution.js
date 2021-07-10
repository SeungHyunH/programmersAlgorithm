function solution(nums) {
    var answer = 0;
    let nums_set = new Set(nums);
    if(nums.length/2 < nums_set.size){
        answer = nums.length/2
    }else{
        answer = nums_set.size;
    }
    return answer;
}

//테스트 케이스
let result = solution([3,1,2,3]);
console.log(result);
result = solution([3,3,3,2,2,4]);
console.log(result);
result = solution([3,3,3,2,2,2]);
console.log(result);