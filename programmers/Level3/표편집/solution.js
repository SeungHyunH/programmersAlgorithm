function solution(n, k, cmd) {
  const answer = Array(n).fill('O');
  const stack = [];
  let root = new Node(0, null);
  let curNode = root;

  let prevNode = root;
  let nextNode = null;
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;
    if (i === k) { curNode = newNode; }
  }

  cmd.forEach(commandLine => {
    const [command, count] = commandLine.split(' ');
    let i = 0;
    switch (command) {
      case 'U':
        for (; i < count && curNode.prev; i++) { curNode = curNode.prev; }
        break;
      case 'D':
        for (; i < count && curNode.next; i++) { curNode = curNode.next; }
        break;
      case 'C':
        stack.push(curNode);
        prevNode = curNode.prev;
        nextNode = curNode.next;
        if (prevNode && nextNode) {
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          curNode = nextNode;
        } else if (prevNode) {//cur 노드가 마지막일 때
          prevNode.next = null;
          curNode = prevNode;
        } else if (nextNode) {//cur 노드가 root 일 때
          nextNode.prev = null;
          curNode = nextNode;
        }
        break;
      case 'Z':
        let temp = stack.pop();
        prevNode = temp.prev;
        nextNode = temp.next;
        if(prevNode){
          prevNode.next = temp;
        }
        if(nextNode){
          nextNode.prev = temp;
        }
        break;
    }
  });
  stack.forEach(node=>answer[node.idx]='X');
  return answer.join('');
}

const Node = function (idx, prev) {
  this.idx = idx;
  this.prev = prev;
  this.next = null;
}

console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]));//"OOOOXOOO"
console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]));//"OOXOXOOO"