function cakes(recipe, available){
  let numOfElements = 0;
  let [ingredient, amount] = Object.entries(recipe)[numOfElements];
  let howMany = 0;

  const filteredAvailable = Object.keys(available).filter((ingredients, index) =>{
    if(Object.keys(recipe).includes(ingredients)){
      return true;
    }
    else{
      return false;
    }
  });

  console.log(filteredAvailable);

  if(filteredAvailable.length === Object.keys(recipe).length){
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
