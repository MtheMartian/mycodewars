function validBraces(braces){
  let parenthesis = false;
  let twoBraces = false;
  let curly = false;
    if(braces.includes('()')){
      parenthesis = true;
    }
    if(braces.includes('[]')){
      twoBraces = true;
    }
    if(braces.includes('{}')){
      curly = true;
    }
    if(parenthesis && twoBraces && curly){
      console.log(true);
    }
    else{
      console.log(false);
    }
}