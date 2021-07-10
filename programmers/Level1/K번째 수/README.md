# [프로그래머스 Level1] K번째 수
- https://programmers.co.kr/learn/courses/30/lessons/42748
- 배열슬라이싱과 정렬에 대한 문제이다.
  - slice와 sort()함수로 해결했다.
  - 그냥 sort()하면 중간에 1개가 오답이 나고, sort((a,b)=>{return a-b;});로 정렬해야 정답이 된다.