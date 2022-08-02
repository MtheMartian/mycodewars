function spinWords(string){
  let storeWord = [];
  let fullString = [];
  let isThereASpace = false;
  for(let char in string){
    isThereASpace = false;
    if(!string[char].includes(' ')){
      storeWord.push(string[char]);
    }
    else{
      isThereASpace = true;
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
  
  console.log(storeWord);
  console.log(fullString);
}