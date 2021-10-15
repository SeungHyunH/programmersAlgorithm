function solution(n, weak, dist) {
  const len = weak.length;
  const linear_weak = Array(len*2-1).fill(0);
  for(let i = 0; i < len*2-1; i++){linear_weak[i] = i < len ? weak[i] : weak[i-len]+n;}

  const getPermutation = (arr,n)=>{
    if(n===1){return arr.map(el=>[el]);}
    const result = [];
    arr.forEach((val,idx,origin)=>{
      const rest = [...origin.slice(0,idx),...origin.slice(idx+1)];
      const perms = getPermutation(rest,n-1);
      result.push(...perms.map(perm=>[val,...perm]));
    });
    return result;
  }

  for(let i = 1; i <= dist.length; i++){
    const permutation = getPermutation(dist,i);

    for(perm of permutation){
      for(let j = 0; j < len; j++){
        let line = linear_weak.slice(j,len+j);
        for(p of perm){
          const coverage = line[0]+p;
          line = line.filter(e => e > coverage);
          if(!line.length){return i;}
        }
      }
    }
  }
  return -1;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));//2
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));//1