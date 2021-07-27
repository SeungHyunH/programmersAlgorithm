# [프로그래머스 Level1] 제일 작은 수 제거하기
- https://programmers.co.kr/learn/courses/30/lessons/12935
- 최소값을 구한 뒤 최소값을 제외한 나머지값을 구하는 문제이다.
  - 배열의 순서를 유지해야하기 때문에 sort해서 풀면 안된다. 따라서 JS의 min함수를 사용해야한다.(안쓰고 구할려면 for문으로 구하면 된다.)
  - min함수에 배열을 사용할려면 apply를 함수를 사용해야 한다.