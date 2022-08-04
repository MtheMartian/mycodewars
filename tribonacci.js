function tribonacci(signature, n){
  let tribArray = signature;
  if(n == 0 || n < 0){
    return tribArray = [];
  }
  else if(n < 3){
    tribArray.length = n; 
  }
  for(let i = 0; i < n - 3; i++){
    if(tribArray.length >= 3){
      let sumThem = tribArray[i] + tribArray[i + 1] + tribArray[i + 2];
      tribArray.push(sumThem);
    }
  } 
  
return tribArray;
}