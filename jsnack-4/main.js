
//exe4A
let squadre = [];
for(let i = 0; i < 5; i++){

  let inputUser = prompt('Inserisci il nome della squadra')
  let squadra = {
    'nome': inputUser,
    'punti': 0,
    'cartellini': 0
  }
  squadre.push(squadre);
  console.log(squadre);
}


//exe4B
const min = 1;
const max = 10;

function randomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for(let i = 0; i < 5; i++){
  squadre[chiave].punti = randomInt(min, max);
  squadre[chiave].cartellini = randomInt(min, max);

  console.log(squadre);
}
