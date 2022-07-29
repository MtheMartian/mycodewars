let weLikeThose = ["James", "Jean", "LeLouche", "Alucard", "Luffy", "Ace"];
likes(weLikeThose);

function likes(names) {
  let countLikers = 0;
  let firstLiker = "";
  let secondLiker = "";
  let thirdLiker = "";
  
  firstLiker = names[0];
  secondLiker = names[1];
  thirdLiker = names[2];
  
  if(names.length == 0){
    console.log("no one likes this");
  }
  else if(names.length == 1){
    console.log(`${firstLiker} likes this`);
  }
  else if(names.length == 2){
    console.log(`${firstLiker} and ${secondLiker} like this`);
  }
  else if(names.length == 3){
    console.log(`${firstLiker}, ${secondLiker} and ${thirdLiker} like this`);
  }
  else{
    countLikers = (names.length - 2);
    console.log(`${firstLiker}, ${secondLiker} and ${countLikers} others like this`);
  }
}