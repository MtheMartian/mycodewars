function cakes(recipe, available){
  let numOfElements = 0;
  let [ingredient, amount] = Object.entries(recipe)[numOfElements];
  let howMany = 0;
  let howManyTimes = 0;

  const filteredAvailable = Object.keys(available).filter((ingredients, index) =>{
    if(Object.keys(recipe).includes(ingredients)){
      return true;
    }
    else{
      return false;
    }
  });

  for(let i = 0; i < filteredAvailable.length; i ++){
    if(filteredAvailable[i] === ingredient){
      numOfElements += 1;
      howManyTimes += 1;
    }
    else if(howManyTimes > 1){
      return console.log("'Can't bake that cake!");
    }
  }


  console.log(filteredAvailable);

  if(filteredAvailable.length === Object.keys(recipe).length){
    numOfElements = 0;
    for(const[key, value] of Object.entries(available)){
      for(let i = 0; i < Object.keys(available).length; i++){
        if(Object.keys(available)[i] === ingredient){
          numOfElements = numOfElements + 1;
          if(Object.values(available)[i] / amount >= 1){
            howMany += (Math.floor(Object.values(available)[i] / amount));
          }
          console.log(key);
        } 
      }
    }
  }
  console.log(Math.floor(howMany / Object.keys(recipe).length));
}
