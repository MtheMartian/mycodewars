function cakes(recipe, available){
  let numOfElements = 0;
  let [ingredient, amount] = Object.entries(recipe)[numOfElements];
  let availableAmount = 0;
  let howManyTimes = 0;
  let duplicate = [];

  const filteredAvailable = Object.keys(available).filter((ingredients, index) =>{
    if(Object.keys(recipe).includes(ingredients)){
      return true;
    }
    else{
      return false;
    }
  });

  const poopy = new Object(filteredAvailable);
  console.log(poopy);

  for(let i = 0; i < filteredAvailable.length; i++){ 
    if(howManyTimes >= 1){
      return console.log("Can't bake that!");
    }
    else{
      if(filteredAvailable[i] === ingredient && !duplicate.includes(ingredient)){
        duplicate.push(ingredient); 
        console.log(duplicate + howManyTimes);
      }
      else if(filteredAvailable[i] !== ingredient){
        numOfElements += 1;
      }
      else if(duplicate.includes(ingredient)){
        howManyTimes += 1;
      }
    }
  }


  console.log(filteredAvailable);

  if(filteredAvailable.length === Object.keys(recipe).length){
    let numberAdded = false;
    numOfElements = 0;
    for(const[key, value] of Object.entries(available)){
      for(let i = 0; i < Object.keys(available).length; i++){
        if(Object.keys(available)[i] === ingredient){
          numOfElements = numOfElements + 1;
          if(Object.values(available)[i] / amount >= 1 && numberAdded === false){
            availableAmount = Math.floor(Object.values(available)[i]);
            numberAdded = true;
          }
          if((Object.values(available)[i] / amount) < availableAmount){
            availableAmount = Math.floor(Object.values(available)[i] / amount);
          }
          console.log(key);
        } 
      }
    }
  }
  
  console.log(availableAmount);
}
