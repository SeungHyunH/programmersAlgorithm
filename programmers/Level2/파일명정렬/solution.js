function solution(files) {
  files.sort((a,b)=>{
    let [,HEAD1,NUMBER1] = a.match(/(\D+)(\d+)/);
    let [,HEAD2,NUMBER2] = b.match(/(\D+)(\d+)/);
    HEAD1 = HEAD1.toLowerCase();
    HEAD2 = HEAD2.toLowerCase();
    if(HEAD1>HEAD2){
      return 1;
    }
    else if(HEAD1<HEAD2){
      return -1;
    }
    else{
      if(NUMBER1-NUMBER2<0){return -1;}
      else{return 1;}
    }
  });
  return files;
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
//["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
//["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]