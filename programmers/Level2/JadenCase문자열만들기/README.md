# [프로그래머스 Level2] JadenCase 문자열 만들기
- https://programmers.co.kr/learn/courses/30/lessons/12951
- 공백을 기준으로 각 단어들의 첫 글자는 대문자, 나머지는 소문자로 만드는 문제였다.
  - split()으로 공백을 기준으로 단어를 나누고, toUpperCase와 toLowerCase를 이용해 대소문자변환을 한 뒤 join 으로 문자열을 다시 합치면 된다.
  - 정규식을 이용하는 방법도 있다.우선 문자열을 toLowerCase()를 적용한 뒤 정규식을 이용해 치환하면 된다.
    - s.toLowerCase().replace(/\b[a-z]/,letter => letter.toUpperCase());