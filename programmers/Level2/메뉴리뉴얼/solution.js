function solution(orders, course) {
  let answer = [];
  function dfs(orderCount,order, target, idx, cnt, goal) {
    if(order.length-idx<goal-cnt){return;}
    if (cnt === goal) {
      orderCount[target] = isNaN(orderCount[target]) ? 1 : orderCount[target] + 1;
    }
    for (let i = idx; i < order.length; i++) {
      dfs(orderCount,order, target + order[i], i + 1, cnt + 1, goal);
    }
  }
  course.forEach(function (num) {
    let orderCount = {};
    orders.forEach(function (order) {
      dfs(orderCount,order.split('').sort(), "", 0, 0, num);
    });

    let menu = [];
    let maxOrder = 0;
    for (let [key, value] of Object.entries(orderCount)) {
      if (value > 1) {
        if (value > maxOrder) {
          maxOrder = value;
          menu = [key];
        } else if (value === maxOrder) {
          menu.push(key);
        }
      }
    }
    answer = answer.concat(menu);
  });

  return answer.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));//["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));//["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));//["WX", "XY"]