/*JSnack 4 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti */

var arraySquadreDiCalcio = [
  item1 = {nome:"Juventus", falli_subiti: 0, punti_fatti: 0 },
  item2 = {nome:"Inter", falli_subiti: 0, punti_fatti: 0 },
  item2 = {nome:"Napoli", falli_subiti: 0, punti_fatti: 0 },
];
var arrayPunti = [];
arraySquadreDiCalcio.forEach(item => {
  var falliSubitiRandom = Math.floor(Math.random() * (40 - 0)) + 0;
  var puntiFattiRandom = Math.floor(Math.random() * (84 - 0)) + 0;
  item.falli_subiti = falliSubitiRandom;
  item.punti_fatti = puntiFattiRandom;
  console.log(falliSubitiRandom);
  console.log(puntiFattiRandom);
  arrayPunti.push(puntiFattiRandom);
});

console.log(arrayPunti);
console.log(arraySquadreDiCalcio);
var punteggioMax = Math.max(...arrayPunti);
console.log(punteggioMax);

function findMaxPuntiFatt(punti) { 
    return punti.punti_fatti === punteggioMax;
}

var winner = arraySquadreDiCalcio.find(findMaxPuntiFatt);
console.log(winner); 
alert(`" 🏆 The winner is 🏆" ${winner.nome} ⚽⚽⚽  con ${winner.punti_fatti} punti `)