function solution(nodeinfo) {
  for (let i = 0; i < nodeinfo.length; i++) {//노드인덱스 추가
    nodeinfo[i].push(i + 1);
  }
  nodeinfo.sort((a, b) => b[1] - a[1]);//y값을 기준으로 정렬

  const Node = function ([x, y, idx]) {
    this.x = x;
    this.idx = idx;
    this.left = null;
    this.right = null;
  }

  let root = new Node(nodeinfo.shift());//루트노드 생성
  while (nodeinfo.length) {
    let cur = new Node(nodeinfo.shift());//y값이 큰 것부터 노드생성
    let parent = root;//부모노드초기화
    while (true) {//x값을 비교해 null값을 탐색해 자식노드 위치를 찾을 때까지 탐색
      if (parent.x > cur.x && parent.left !== null) {
        parent = parent.left;
      } else if (parent.x < cur.x && parent.right !== null) {
        parent = parent.right;
      } else {
        if (parent.x > cur.x) { parent.left = cur; }
        else { parent.right = cur; }
        break;
      }
    }
  }

  const answer = [[],[]];//[전위 순회 결과,후위 순회 결과]
  const pre_order = (cur) => {//탐색->왼쪽->오른쪽
    if(cur === null){return;}
    answer[0].push(cur.idx);
    pre_order(cur.left);
    pre_order(cur.right);
  }

  const post_order = (cur) => {//왼쪽->오른쪽->탐색
    if(cur === null){return;}
    post_order(cur.left);
    post_order(cur.right);
    answer[1].push(cur.idx);
  }
  pre_order(root);
  post_order(root);
  return answer;
}

console.log(solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]));//	[[7, 4, 6, 9, 1, 8, 5, 2, 3], [9, 6, 5, 8, 1, 4, 3, 2, 7]]