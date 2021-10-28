function solution(word, pages) {
  word = word.toLowerCase();
  const pageInfo = new Map();
  pages.forEach((page,idx)=>{
    const tag = page.split('\n');

    const pageURL = tag[tag.findIndex(el=>el.includes('meta property'))].match(/"https:\S*"/gi)[0];

    const bodyStart = tag.findIndex(el=>el.includes('<body>'));
    const bodyEnd = tag.findIndex(el=>el.includes('</body>'));
    const body = tag.slice(bodyStart+1,bodyEnd);

    const point = body.flatMap(str=>str.toLowerCase().split(/[\d|\W]/)).filter(e=>e===word).length;

    const outLinks = body.flatMap(str=>str.match(/<a href="https:\S*"/gi));
    let len = outLinks.length;
    for(let i = 0; i < len; i++){
      let cur = outLinks.shift();
      if(cur!==null){outLinks.push(cur.substring(8,cur.length));}
    }
    
    pageInfo.set(pageURL,{point,outLinks,idx,matchPoint:point});
  });

  for(const [key,value] of pageInfo){
    const linkPoint = value.point/value.outLinks.length;
    value.outLinks.forEach(link=>{
      if(pageInfo.has(link)){
        const origin = pageInfo.get(link);
        pageInfo.set(link,{...origin,matchPoint:origin.matchPoint+linkPoint});
      }
    });
  }

  let maxPoint = 0;
  let ans = Infinity;
  for(const [key,value] of pageInfo){
    if(maxPoint<value.matchPoint){ans=value.idx;maxPoint=value.matchPoint;}
    else if(maxPoint===value.matchPoint){
      if(ans > value.idx){ans = value.idx;}
    }
  }
  return ans;
}

console.log(solution("blind", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://a.com\"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href=\"https://b.com\"> Link to b </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://b.com\"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href=\"https://a.com\"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href=\"https://c.com\"> Link to c </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://c.com\"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href=\"https://a.com\"> Link to a </a>\n</body>\n</html>"]));//0
console.log(solution(	"Muzi", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"]));//	1