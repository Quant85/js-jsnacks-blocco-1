/*JSnack 2
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

var arrayOggetti = [
  modello1= {
    nome: "ARC8 Escapee",
    taglia: 54,
    peso: 810
  },
  modello2= {
    nome: "Basso Diamante SV Disc",
    taglia: 58,
    peso: 720
  },
  modello2= {
    nome: "TCR ADVANCED SL 0 DISC RED",
    taglia: "M",
    peso: 665
  }
];

var arrayPeso = [];
arrayOggetti.forEach(element => {
  console.log(element.peso);
  var pesoBike=element.peso;

  arrayPeso.push(pesoBike);
});
alert(Math.min(...arrayPeso));
console.log(arrayPeso);