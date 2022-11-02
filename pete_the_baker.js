function cakes(recipe, available){
  let numOfElements = 0;
  let [ingredient, amount] = Object.entries(recipe)[numOfElements];
  let howMany = 0;
  for(const[key, value] of Object.entries(available)){
    for(let i = 0; i < Object.keys(available).length; i++){
      if(Object.keys(available)[i] === ingredient){
        numOfElements = numOfElements + 1;
        if(Object.values(available)[i] / amount >= 1){
          howMany += (Object.values(available)[i] / amount);
        }
        console.log(key);
      } 
    }
  }
  console.log(howMany / Object.keys(recipe).length);
}
