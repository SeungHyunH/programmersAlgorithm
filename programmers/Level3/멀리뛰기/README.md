# [프로그래머스 Level3] 멀리뛰기
- https://programmers.co.kr/learn/courses/30/lessons/12914
- DP문제이다. O(n)으로 해결가능하다. dp[i] = dp[i-1]+dp[i-2] 이다.
  - dp[0]와 dp[1]은 1로 초기화해주어야 한다.(거쳐서 이동하는게 아니라 바로 이동이 가능한 경우이기 때문)
- 너무 쉬운DP문제였다. 기초적인 DP문제여서 3단계보다는 2단계에 적용되어야 되는게 아닐까 생각했다.