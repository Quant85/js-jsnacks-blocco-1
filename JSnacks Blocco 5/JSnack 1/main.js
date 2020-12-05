/* JSnack 1 - blocco 5 - 
Crea 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

function sommaPropOggInArray(arr,nomeProprietà) {
  var sommaProp = 0;
  for (let index = 0; index < arr.length; index++) {
    var iesimoElemento = arr[index];
    var proprietàX = iesimoElemento[nomeProprietà];
    sommaProp += proprietàX;
  } return sommaProp;
}


var boxZucchine = [
  {
  varietà: "CUCURBITA PEPO",
  peso:100,
  lunghezza:14
  },
  {
    varietà: "Zucchina lunga fiorentina",
    peso:60,
    lunghezza:14
  },
  {
    varietà: "Zucchina striata di Napoli",
    peso:150,
    lunghezza:32
  },
  {
    varietà: "Zucchina rigata pugliese",
    peso:100,
    lunghezza:27
  },
  {
    varietà: "Zucchina napoletana lunga rigata",
    peso: 160,
    lunghezza:28
  },
  {
    varietà: "Zucchino nero di Milano",
    peso: 80,
    lunghezza:16
  },
  {
    varietà: "Zucchino siciliano - cucuzza",
    peso: 40,
    lunghezza:42
  },
  {
    varietà: "Zucchino tondo di Piacenza",
    peso: 60,
    lunghezza:14
  },
  {
    varietà: "Zucchina chiara di Faenza",
    peso: 70,
    lunghezza:17
  },
  {
    varietà: "Zucchino romanesco",
    peso: 100,
    lunghezza:24
  }
];


//console.log(boxZucchine);
/*
var sommaPeso = 0;
for (let i = 0; i < boxZucchine.length; i++) {
  var zucchina = boxZucchine[i];
  //console.log(boxZucchine[i]);
  var varietaX = zucchina.varietà;
  var pesoX =zucchina.peso;
  alert(`La ${varietaX} 🥒 pesa mediamente ${pesoX} grammi`);
  //console.log(pesoX);
  sommaPeso += pesoX;
  //console.log(sommaPeso);
}
alert(`La somma di tutte le zucchine è di ${sommaPeso} grammi, un bel CUCUZZARO `);
*/

//Soluzione  ciclo forEach
var somma = 0;
boxZucchine.forEach(function(item){
  somma += item.peso;
});

console.log(somma);
//-------


var totalePesoZucchine = sommaPropOggInArray (boxZucchine,"peso");
console.log(totalePesoZucchine);
var totalePesoZucchine = sommaPropOggInArray (boxZucchine,"lunghezza");
console.log(totalePesoZucchine);




// Zucchine Costructor --- sol. 2.0

class Zucchina {
  constructor (a, b, c) {
    this.varietà = a;
    this.lunghezza = b;
    this.peso = c;
  }
}

var cestoZucchine = [];

//Raccogliotere - prendi 10 zucchine lunghe più di 10 cm e non oltre le 34 e tra i 100gr e i 340gr

var varietàZucchine = [];
var provenienza = [" di Faenza"," di Firenze"," di Milano"," di Napoli"," di Roma"," di Sicilia"];
var caratteristiche = [" striato corto"," striato lungo"," rigato tondo"," liscio tondo"," nero", " chiaro"];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var zucchineRaccolte = 10;
var lunghezzaMin = 10;
var lunghezzaMax = 34;
var pesoaMin = 80;
var pesoMax = 160;

while (varietàZucchine.length < zucchineRaccolte) {
  var pesoX = getRandomNumber(pesoaMin,pesoMax);
  //console.log(pesoX);
  var lunghezzaY = getRandomNumber(lunghezzaMin,lunghezzaMax);
  //console.log(lunghezzaY);
  //--potrei separare il generatore per una miglior comprensione o creare una funzione
  var provenienzaX = getRandomNumber(0,provenienza.length-1);
  //console.log(provenienza[provenienzaX]);

  var caratteristicheY = getRandomNumber(0,caratteristiche.length-1);
  var varietàRandom = "Zucchino" + caratteristiche[caratteristicheY] + provenienza[provenienzaX] ;
  //console.log(varietàRandom);
  
  if (varietàZucchine.length < zucchineRaccolte) {
    varietàZucchine.push(varietàRandom);
  }
  var varietàZucchineX = getRandomNumber(0,varietàZucchine.length-1);
  var zucchinaRaccolta = new Zucchina(varietàZucchine[varietàZucchineX],lunghezzaY,pesoX);
  cestoZucchine.push(zucchinaRaccolta);
}

console.log(varietàZucchine);
console.log(zucchinaRaccolta);
console.log(cestoZucchine);

var pesoZucchine = 0;
cestoZucchine.forEach(function(item){
  pesoZucchine += item.peso;
});

console.log(pesoZucchine);
