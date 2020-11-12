var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

randomBetween = (min, max) => {
  const random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

const charStr = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let randomLetter = () => charStr.charAt(randomBetween(0, 24));

const newArray = arrayObj.map((element) => {

  let newObjProperty = {position: randomLetter()};
  let mergedObj = {};

  return mergedObj = {...element,...newObjProperty};

});

console.log(newArray);
