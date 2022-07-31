function vowelCount(word){
  word = word.toLowerCase();
  let count = 0;
  for(let char in word){
    if(word[char].includes('a') || word[char].includes('e') 
        || word[char].includes('i') || word[char].includes('o') || word[char].includes('u')){
          ++count;
    }
  }
  console.log(count);
}