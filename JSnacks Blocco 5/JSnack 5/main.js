/*
JSnack 5 - blocco 5 -
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

var array1 = [1,2,3,4,5,6,7,8,9,10,11];
var a= 0;
var b= 12; 

function contentsArray(arr,start,end) {
  var sectionArray=[];
  if (start >= 0 && start < end && end <= arr.length ) {
    for (var i = start; i <= end; i++) {
      var element = arr[i];
      sectionArray.push(element);
    }
  }
  return sectionArray;
}

var nuovoArray = contentsArray(array1,a,b);
console.log(contentsArray(array1,a,b));
console.log(nuovoArray);