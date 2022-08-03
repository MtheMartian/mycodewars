function tribonacci(signature, n){
  let tribArray = [];
  if(n == 0){
    return tribArray;
  }

  for(let  i = 0; i < n; i++){
    if(tribArray.length == 0){
      tribArray.push(signature[0]);
    }
    else if(tribArray.length == 1){
      tribArray.push(signature[1]);
    }
    else if(tribArray.length == 2){
      tribArray.push(signature[2]);
    }
    if(tribArray.length >= 3){
      tribArray.push(tribArray[i] + tribArray[i+1] + tribArray[i+2]);
    }
  }
console.log(tribArray);
}