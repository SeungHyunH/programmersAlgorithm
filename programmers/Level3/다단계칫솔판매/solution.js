function solution(enroll, referral, seller, amount) {
  const answer = [];
  const list = {};
  enroll.forEach((val,idx)=>{
    answer.push(0);
    list[val]=idx;
  });

  const dfs = (cur,money) =>{
    if(cur === '-' || money === 0){return;}
    answer[list[cur]]+=Math.ceil(money*0.9);
    dfs(referral[list[cur]],Math.floor(money*0.1));
  };
  seller.forEach((val,idx)=>dfs(val,amount[idx]*100));
  return answer;
}


console.log(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]));//[360, 958, 108, 0, 450, 18, 180, 1080]
console.log(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["sam", "emily", "jaimie", "edward"], [2, 3, 5, 4]));//[0, 110, 378, 180, 270, 450, 0, 0]