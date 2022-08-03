function spinWords(string){
  let storeWord = [];
  let fullString = [];
  let newString = "";
  for(let char in string){
    if(!string[char].includes(' ')){
      storeWord.push(string[char]);
    }
    else{
      if(storeWord.length >= 5){
        for(let i = 0; i < storeWord.length; i++){
          fullString.push(storeWord[storeWord.length -1 - i])
        }
        storeWord.length = 0;
      }
      else{
        for(let i = 0; i < storeWord.length; i++){
          fullString.push(storeWord[i])
        }
        storeWord.length = 0;
      }
      fullString.push(' ');
    }
  } 
  if(storeWord.length >= 5){
    for(let i = 0; i < storeWord.length; i++){
      fullString.push(storeWord[storeWord.length -1 - i])
    }
    storeWord.length = 0;
  }
  else{
    for(let i = 0; i < storeWord.length; i++){
      fullString.push(storeWord[i])
    }
    storeWord.length = 0;
  }
  
  for(let char in fullString){
    newString += fullString[char];
  }
  return newString;
}