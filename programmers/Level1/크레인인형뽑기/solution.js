function solution(board, moves) {
    var answer = 0;
    let stack = [];
    moves.forEach(order => {
        const doll = pickup(board,order-1);
        if(doll){
            if(stack[stack.length-1] === doll){
                stack.pop();
                answer+=2;
            }else{
                stack.push(doll);
            }
        }
    })
    return answer;
}

function pickup(board,order){
    for(let i = 0; i < board.length; i++){
        if(board[i][order] !== 0){
            const doll =  board[i][order];
            board[i][order]=0;
            return doll;
        }
    }
}

//테스트 케이스
var result = solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]);
console.log(result);