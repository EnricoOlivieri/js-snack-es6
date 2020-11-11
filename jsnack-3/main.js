let triangolo = {
  base: 20 ,
  altezza: 10 ,
  area: function(){
    return(this.altezza * this.base) / 2
  }
  console.log(triangolo.area())
}


let ipotenusa = Math.sqrt(triangolo.altezza ** 2 + triangolo.base ** 2);

console.log(ipotenusa);

let perimetro = ipotenusa + triangolo.base + triangolo.altezza;

console.log(perimetro);
