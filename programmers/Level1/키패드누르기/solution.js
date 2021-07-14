function solution(numbers, hand) {
    var answer = '';
    let pt = [[0,3],[2,3]];

    numbers.forEach(function(num){
      if(/[147]/.test(num)){
        answer+='L';
        pt[0] = [0,Math.floor(num/3)];
      }
      else if(/[369]/.test(num)){
        answer+='R';
        pt[1] = [2,Math.floor(num/3)-1];
      }
      else{
        let ty = num === 0 ? 3 : Math.floor(num/3);
        let distanceL = Math.abs(pt[0][0]-1)+Math.abs(pt[0][1]-ty);
        let distanceR = Math.abs(pt[1][0]-1)+Math.abs(pt[1][1]-ty);

        if(distanceL < distanceR){answer+='L';pt[0]=[1,ty];}
        else if(distanceL > distanceR){answer+='R';pt[1]=[1,ty];}
        else{if(hand ==="left"){answer+='L';pt[0]=[1,ty];}else{answer+='R';pt[1]=[1,ty];}}
      }
    });

    return answer;
}

//테스트코드

let result = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right");
console.log(result); //"LRLLLRLLRRL"

result = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left"	);
console.log(result); //"LRLLRRLLLRR"

result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right");
console.log(result); //"LLRLLRLLRL"