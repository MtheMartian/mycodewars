function cakes(recipe, available){
  const recipeArr = Object.entries(recipe);
  let availableAmount = [];
  let lowestAmount = 0;

  const filteredAvailable = Object.entries(available).filter((ingredients, index) =>{
    if(Object.keys(recipe).includes(ingredients[0])){
      return true;
    }
    else{
      return false;
    }
  });

  const filteredAvailableObj = Object.fromEntries(filteredAvailable);

  //Check if all the ingredients are present
  if(Object.keys(filteredAvailableObj).length === Object.keys(recipe).length){
      //Check how many cakes can be baked (based on lowest amount).
        for(let i = 0; i < filteredAvailable.length; i++){
          for(let j = 0; j < recipeArr.length; j++){
            if(filteredAvailable[j][0] === recipeArr[i][0]){
              availableAmount.push(filteredAvailable[j][1] / recipeArr[i][1]);
            } 
          }
        }
      }

  if(availableAmount.length >= 1){
    lowestAmount = availableAmount[0];

    availableAmount.forEach(amount =>{
      if(amount < lowestAmount){
        lowestAmount = amount;
      }
    });
  }
  return Math.floor(lowestAmount);
}
