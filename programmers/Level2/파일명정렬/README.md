# [프로그래머스 Level2] 파일명정렬
- https://programmers.co.kr/learn/courses/30/lessons/17686
- 문자열처리와 정렬문제이다. HEAD,NUMBER,TAIL로 이루어진 파일명에서 HEAD와 NUMBER를 기준을 정렬하는 문제이다.
  - 정규식을 이용하면 HEAD,NUMBER을 간단하게 분리할 수 있다.
    - /(\D+)(\d+)/  => FILE,HEAD,NUMBER 이렇게 분리가 된다.
- 간단한 정규식처리와 정렬을 묻는 문제였다. 정규식을 모른다면 꽤 귀찮은 문제같기도 하다.