# [프로그래머스 Level3] 기지국 설치
- https://programmers.co.kr/learn/courses/30/lessons/12979
- Greedy문제다. 200,000,000의 크기의 N과 10,000개의 station이 있을 때 N의 범위중 station의 전파가 닿는 범위를 제외하고, 새롭게 station을 세운다면 최소 몇개를 세워야 하는지 구하는 문제다.
  - N의 크기가 크기 때문에 배열로 만들어 풀 수 없다. 따라서 station을 이용해 범위를 구해서 개수를 세야 한다.
    - 거리 = 이전 방송국의 최대범위 ~ 현재 방송국의 최소범위
    - station의 전파가 닿는 범위 : 2*w+1
    - station의 개수 = 각 거리/전파범위
  - 한가지 주의해야 할 점은 개수를 구할 때 0 < x <=1 => 1개, 1 < x <=2 => 2개 등 이런식으로 구해야 하기 때문에 내림이 아니라 올림으로 계산을 해야 한다.
- staion의 개수를 구하는 방법만 떠올리면 금방 푸는 문제였다. N의 범위가 크기 때문에 결국 staions를 이용해 거리를 구해야할 수 밖에 없기 때문이다.