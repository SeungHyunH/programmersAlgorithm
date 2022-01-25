# [프로그래머스 Level3] 파괴되지않은 건물
- https://programmers.co.kr/learn/courses/30/lessons/92344
- 누적합문제다. [type, r1, c1, r2, c2, degree]형태의 skill이 주어졌을 때 board에 일정범위에 +-연산을 해 1이상인 수의 개수를 구하는 문제다. type이 1이면 -degree, type이 2이면 +degree이다.
  - 단순하게 배열에 순차적으로 접근해서 풀면 효율성에서 시간초과가 뜬다.
  - 누적합으로 풀어야 한다. 자세한 풀이는 카카오문제풀이 해설을 참고(https://tech.kakao.com/2022/01/14/2022-kakao-recruitment-round-1/)
- 누적합이라는 개념을 처음 본 입장으로서 굉장히 충격적인 문제였다. O(N*M)을 O(1)로 만들어버린 충격적인 문제다. 굉장히 중요한 문제였고, 나중에 다시 꼭 풀어봐야할 문제다.