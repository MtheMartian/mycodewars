function moveZeros(arr){
  let numOfZero = 0;
  for(let elem in arr){
    if(arr[elem] === 0){
      ++numOfZero;
    }
  }
  const result = arr.filter(element =>{
    if(element !== 0){
      return true;
    }
  });
   for(let i = 1; i <= numOfZero; i++){
    result.push(0);
   }
  return result;
}