function solution(lottos, win_nums) {
    let min = lottos.filter(idx=>win_nums.includes(idx)).length;
    let cnt_zero = lottos.filter(idx=>idx === 0 ? true : false).length;
    let max = cnt_zero+min < 2 ? 6 : (7-cnt_zero-min);
    min = min < 2 ? 6 : 7-min
    return [max,min];
}

let result = solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]);
console.log(result); //[3, 5]
result = solution([0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]	);
console.log(result);//[1, 6]
result = solution([45, 4, 35, 20, 3, 9]	,[20, 9, 3, 45, 4, 35]);
console.log(result);//[1, 1]