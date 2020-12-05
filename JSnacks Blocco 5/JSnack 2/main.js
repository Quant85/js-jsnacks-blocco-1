/* JSnack 2 - blocco 5 - 
Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC)
*/

function upPercase(strg) {
  var arr1 = strg.split(' ');
  var newArr1 = [];

  for(var x = 0; x < arr1.length; x++){
      newArr1.push(arr1[x].charAt(0).toUpperCase()+arr1[x].slice(1));
  }

  return newArr1.join(' ');
}

function specchiaStringa(strg){
  return strg.split('').reverse().join('');
}


var stringaUtente = prompt("Dammi una stringa io la specchierò per te");

upPercase(stringaUtente);
specchiaStringa(stringaUtente);
console.log(stringaUtente);
console.log(specchiaStringa(stringaUtente));
console.log(upPercase(stringaUtente));
console.log(specchiaStringa(upPercase(stringaUtente)));