function cakes(recipe, available){
  if(Object.keys(recipe).length <= Object.keys(available).length){
    console.log('Yup you can bake it!');
  }
}

// for(const [key, value] of Object.entries(available)){
  //   if(Object.keys(recipe).includes(key)){
  //     console.log(true);
  //   }
  // } 
