function narcissistic(value) {
  value = value.toString();
  let newSameNum = 0;
  for(const digits in value){
    newSameNum += (Math.pow(Number(value[digits]), value.length));
  }
 if(newSameNum == value){
  return true;
 }
 else{
  return false;
 }
}


