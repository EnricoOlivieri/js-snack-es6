let bici = [
  {
    'nome': 'bmx',
    'peso': 10
  }
  {
    'nome': 'mbike',
    'peso': 12
  }
  {
    'nome': 'cross',
    'peso': 14
  }
]

bici.sort((a, b) => a.peso - b.peso);

let {nome, peso} = bici[0];

console.log(`La bici più leggerà è "$ {bici[0].nome}" + con un peso di $ bici[0].peso`);
