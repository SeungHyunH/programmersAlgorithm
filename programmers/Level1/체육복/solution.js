function solution(n, lost, reserve) {
    let realLost = lost.filter(idx=>!reserve.includes(idx));
    let realReserve = reserve.filter(idx=>!lost.includes(idx));

    return n - realLost.filter(L=>{
        let temp = realReserve.find(R=>Math.abs(R-L)<=1);
        if(!temp)return true;
        realReserve = realReserve.filter(R=>R!==temp);
    }).length;
}

let result1 = solution(5,[2, 4],[1, 3, 5]);
let result2 = solution(5,[2, 4],[3]);
let result3 = solution(3,[3],[1]);
console.log(result1,result2,result3);