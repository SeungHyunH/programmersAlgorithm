# [프로그래머스 Level3] 추석트래픽
- https://programmers.co.kr/learn/courses/30/lessons/17676
- 알고리즘 구현문제이다.
  1. 주어진 시간을 밀리세컨드 단위로 바꾼다.
  2. 끝시간~끝시간+1초 사이에 겹치는 로그를 찾는다.
    - 이 때 끝시간+1초는 포함되지 않는다는 것을 주의해야 한다.
    - 로그가 겹칠 조건을 세는 것보다 안겹칠 조건을 세는게 빠르다. 안겹칠 조건은 다음로그의 끝지점이 현재시작지점보다 작거나 다음로그의 시작지점이 현재지점의 끝지점보다 크면 된다.
- 다른 풀이를 보면 시작지점을 기준으로 다시 정렬하기도 하는데, 나의 경우는 정렬을 하지않고 구현했다. 실제로 다른 풀이보다 훨씬 빨랐다. 굳이 정렬을 하지않아도 구현이 가능한 문제였다. 