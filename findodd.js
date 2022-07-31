let j = 0;

function findOdd(A){
  let number = [];
  for(let i = 0; i < A.length; i++){
    if(A[i] == A[j]){
      number.push(A[i]);
    }  
  }
  if(number.length % 2 == 1){
    j = 0;
    return number[0];
  }
  else if(number.length % 2 == 0 && j < A.length){
    number.length = 0;
    ++j;
    findOdd(A);
  }
}