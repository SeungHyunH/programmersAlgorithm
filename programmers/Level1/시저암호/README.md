# [프로그래머스 Level1] 시저암호
- https://programmers.co.kr/learn/courses/30/lessons/12926
- 문자를 n만큼 밀어서 문자열을 만드는 문제이다.
  - ascii코드로 변환한 뒤 n값을 더하고(z값보다 더 커지는 것들은 따로 처리를 해준다.) 다시 문자열로 변환하면 된다.
    - String.fromCharCode(아스키코드값) : 아스키값->문자 변환
    - 문자.charCodeAt(0) : 문자 -> 아스키값
  - 소문자의 경우 97~122, 대문자의 경우 65~90 이다.