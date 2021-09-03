function solution(skill, skill_trees) {
  function Check_Skill_Tree(s){
    let stack = skill.split('');
    for(let i = 0; i < skill_trees.length;i++){
      if(!skill.includes(s[i])){continue;}
      if(s[i]===stack.shift()){
        if(stack.length){continue;}else{return true;}
      }else{
        return false;
      }
    }
    return true;
  }
  return skill_trees.filter(Check_Skill_Tree).length;
}

function solution(skill, skill_trees) {
  const skill_level = {};
  skill.split('').map((_,idx) => skill_level[_]=idx+1);
  function Check_Skill_Tree(s){
    let level = 1;
    for(let i = 0; i < s.length; i++){
      if(skill_level[s[i]]){
        if(skill_level[s[i]]>level){return false;}
        else if(skill_level[s[i]]===level){level++;}
      }
    }
    return true;
  }
  return skill_trees.filter(Check_Skill_Tree).length;
}

console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]));//2