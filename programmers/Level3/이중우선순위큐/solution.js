function solution(operations) {
  const pq = [];
  operations.forEach(op=>{
    op = op.split(' ');
    const operation = op[0];
    const num = Number(op[1]);
    if(operation==='I'){
      let start = 0;
      let end = pq.length;
      let mid = Math.floor((start+end)/2);
      while(start<end){
        if(pq[mid]<=num){
          start = mid+1;
        }else{
          end = mid-1;
        }
        mid = Math.floor((start+end)/2);
      }
      pq.splice(start,0,num);
    }else{
      if(pq.length>0){(num===1)?pq.pop():pq.shift();}
    }
  });
  return (pq.length===0)?[0,0]:[pq[pq.length-1],pq[0]];
}

console.log(solution(["I 16", "D 1"]));//[0,0]
console.log(solution(["I 7", "I 5", "I -5", "D -1"]));//[7,5]
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]));//[333, -45]
console.log(solution(["I 1", "I 2", "I 3", "I 2", "I -1"]));