
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let getAnInput = () => prompt(`Inserisci un numero tra 0 e ${myArray.length - 1}`);

let arr = [getAnInput(),getAnInput()];

arr.sort((a,b) => a - b);

console.log(arr);

const newArray = myArray.filter((element, index) => index >= arr [0] && index <= arr[1]);

console.log(newArray);
