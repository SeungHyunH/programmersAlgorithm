# [프로그래머스 Level2] 삼각달팽이
- https://programmers.co.kr/learn/courses/30/lessons/68645
- 구현력을 요구하는 문제이다. 삼각형을 반시계방향순으로 값을 증가하며 채웠을 때의 배열을 구하는 문제이다. 총 3가지 단계로 진행된다.
  1. 행을 증가시키면서 값을 저장
  2. 열을 증가시키면서 값을 저장
  3. 행과 열을 감소시키면서 값을 저장
- 생각보다 어떻게 구현해야 할지 고민했던 문제였다. 처음에 각 행별로 순열의 규칙을 찾아보려고 했는데, 찾지 못했다. 그래서 단순하게 구현했다. 이 문제로 flat함수를 알게 되었다. 배열의 차원을 낮춰주는 효과가 있었다.