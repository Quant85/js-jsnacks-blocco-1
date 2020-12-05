/* JSnack 3 - blocco 5 -
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

function zucchinaSelect(arrayUpBox,propSelect, marginSelect, arrayBox1,arrayBox2 ){
  for (let i = 0; i < arrayUpBox.length; i++) {
    var elementIesimo = arrayUpBox[i];
    var elementValue = elementIesimo[propSelect];
    if (elementValue <= marginSelect) {
      arrayBox2.push(elementIesimo);
    }else if (elementValue > marginSelect) {
      arrayBox1.push(elementIesimo);
    }
  }
}

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

var primaScelta = [];
var secondaScelta = [];

zucchinaSelect(boxZucchine,"lunghezza", 15 , primaScelta,secondaScelta)
console.log(primaScelta,secondaScelta ); 

var pesoZucchinePrimaScelta = sommaPropOggInArray(primaScelta, "peso");
console.log(`Peso totale delle  🥒  di Prima Scelta ${pesoZucchinePrimaScelta}`);

var pesoZucchineSecondaScelta = sommaPropOggInArray(secondaScelta, "peso");
console.log(`Peso totale delle  🥒  di Seconda Scelta ${pesoZucchineSecondaScelta}`);

var totalePesoZucchine = sommaPropOggInArray (boxZucchine,"peso");
console.log(`Peso totale delle  🥒  non selezionate  ${totalePesoZucchine}`);