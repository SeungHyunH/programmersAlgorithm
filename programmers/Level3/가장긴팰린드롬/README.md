# [프로그래머스 Level3] 가장 긴 팰린드롬
- https://programmers.co.kr/learn/courses/30/lessons/12904
- 회문검사 알고리즘이다. 자주 나오는 알고리즘은 아니지만 문자열 처리에서 대표적인 알고리즘이기도 하다.
  1. 가운데 글자 i를 기준으로 count만큼 떨어진 왼쪽과 오른쪽 글자가 같은지 판단하면 된다. 다를 때까지 count를 증가시킨다.
  2. 위를 모든 글자에 적용한다.
  3. 짝수의 경우 가운데 글자를 기준으로 적용하기 힘들기 때문에 각 문자사이에 임의의 문자를 삽입한다. 예를들어 abba => #a#b#b#a 이런식으로 바꿔서 검사한다.(홀수도 마찬가지)
- 이번에 구현한것은 O(n^2) 이지만, 사실 제대로 구현한다면 O(n)의 방법으로 구현이 가능한 방법으로 알고 있다. Manacher 알고리즘인데, DP를 활용해서 가운데글자 i를 계산해서 구현하는 방법이다.(참고 : https://www.crocus.co.kr/1075)