function validBraces(braces){
  let left = 0;
  let right = 0;
  if(braces.includes('([)') || braces.includes('(])') || braces.includes('({)') || 
      braces.includes('(})') || braces.includes('[(]') || braces.includes('[)]') || 
      braces.includes('[{]') || braces.includes('[}]') || braces.includes('{(}') || 
      braces.includes('{)}') || braces.includes('{[}') || braces.includes('{]}')){
        return false;
  }
  else{
    for(let brace in braces){
      if(braces[brace].includes('(') || braces[brace].includes('[') || braces[brace].includes('{')){
        ++left;
      }
      else{
        ++right;
      }
    }
    if(braces[braces.length - 2] == '(' && braces[braces.length - 1] == ')' ||
    braces[braces.length - 2] == '[' && braces[braces.length - 1] == ']' ||
    braces[braces.length - 2] == '{' && braces[braces.length - 1] == '}' ||
    // Doubles
    braces[braces.length - 2] == ')' && braces[braces.length - 1] == ')' ||
    braces[braces.length - 2] == ']' && braces[braces.length - 1] == ']' ||
    braces[braces.length - 2] == '}' && braces[braces.length - 1] == '}' ||
    // Doubles but, different braces
    braces[braces.length - 2] == ')' && braces[braces.length - 1] == ']' ||
    braces[braces.length - 2] == ')' && braces[braces.length - 1] == '}' ||
    braces[braces.length - 2] == ']' && braces[braces.length - 1] == ')' ||
    braces[braces.length - 2] == ']' && braces[braces.length - 1] == '}' ||
    braces[braces.length - 2] == '}' && braces[braces.length - 1] == ')' ||
    braces[braces.length - 2] == '}' && braces[braces.length - 1] == ']'){
        
    }
    else{
      right -= 1;
    }
    if(left == right){
      return true;
    }
    else{
      return false;
    }
  }
}