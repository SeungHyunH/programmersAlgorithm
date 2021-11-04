function solution(sticker) {
  const N = sticker.length;
  if(sticker.length<=3){return Math.max(...sticker);}
  const dp1 = Array(N);
  const dp2 = Array(N);
  dp1[0]=sticker[0];
  dp1[1]=sticker[0];
  dp2[0]=0;
  dp2[1]=sticker[1];
  for(let i = 2; i < N-1; i++){
    dp1[i] = Math.max(dp1[i-2]+sticker[i],dp1[i-1]);
    dp2[i] = Math.max(dp2[i-2]+sticker[i],dp2[i-1]);
  }
  dp1[N-1]=Math.max(dp1[N-2],dp1[N-3]);
  dp2[N-1]=Math.max(dp2[N-2],dp2[N-3]+sticker[N-1]);
  return Math.max(dp1[N-1],dp2[N-1]);
}

console.log(solution(	[14, 6, 5, 11, 3, 9, 2, 10]));//36
console.log(solution(	[1, 3, 2, 5, 4]));//8