/*
JSnack 4 - blocco 5 -
Scrivi una funzione che fonda due array (con lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

function arrayFusion(arr,arr1,arr2,arrFusion) {
  for (var index = 0; index < arr.length; index++) {
    var element1 = arr1[index];
    var element2 = arr2[index];
    arrFusion.push(element1,element2);
  }
}

var arrayAlfabetico = ["a","b","c"];
var arrayNumerico = [1,2,3];
var arrayAlfaNumericoAlternato = [];

arrayFusion(arrayAlfabetico,arrayAlfabetico,arrayNumerico,arrayAlfaNumericoAlternato);

console.log(arrayAlfaNumericoAlternato);