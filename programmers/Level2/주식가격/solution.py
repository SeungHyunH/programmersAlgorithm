def solution(prices):
  answer = []
  for i in range(len(prices)):
    t = 0
    for j in range(i+1,len(prices)):
      t+=1
      if prices[i]>prices[j]:
        break
    answer.append(t)
  return answer
print(solution([1, 2, 3, 2, 3]))#	[4, 3, 1, 1, 0]
print(solution([1,2,3,2,3,1]))# 5 4 1 2 1 0