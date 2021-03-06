# [프로그래머스 Level3] 최고의 집합
- https://programmers.co.kr/learn/courses/30/lessons/12938
- 규칙을 찾아서 활용하는 문제이다.
  - DFS로 풀면 안되는 문제 중 하나 n이 10000 이하 자연수이기 때문에 조합만 하더라도 엄청나게 나온다.
  - 가장 핵심 규칙은 "각 원소의 곱 이 최대가 되는 집합" 이다. 그렇다면 각 원소의 곱이 최대가 될 때는 언제일까? 그건 최소값이 가장 큰 조합이다. 
    - n = 2,s = 12 인 예시를 보면 1*11 = 12, 2*10 = 20, 3*9 = 27, 4*8 = 32, 5*7=35 , 6*6 = 36 이다. 즉 최소값이 클수록 커지는 것을 알 수 있다.
  - 가장 큰 최솟값은 s/n 이다. 이렇게 구한 후 s에서 최솟값을 빼고, n에서 1을 뺀다면 [n,s]인 문제에서 [n-1,s-최솟값] 문제가 된다. 이런식으로 반복하면 된다.
- 줄서는 방법(https://programmers.co.kr/learn/courses/30/lessons/12936)문제와 비슷한 유형이다. 결국 규칙을 찾아야 되는 문제.