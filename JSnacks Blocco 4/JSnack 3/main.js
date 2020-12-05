/* JSnack
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area. - triangolo di Keplero
(ripassiamo il Teorema di Pitagora ;D ) */

var triangoloRettangolo = {
  base:0, 
  altezza:0
};

alert("Calcolo area e perimetro di un triangolo rettangolo note base ed altezza. e verifica se è un triangolo di Keplero");
triangoloRettangolo.base = Number(prompt("Inserisci la base: "));
triangoloRettangolo.altezza = Number(prompt("Inserisci l'altezza: "));
console.log(triangoloRettangolo);
var catetoAB = triangoloRettangolo.altezza;
var catetoBC = triangoloRettangolo.base;
var ipotenusaCA = Math.sqrt(Math.pow(catetoAB,2)+Math.pow(catetoBC,2));
console.log(ipotenusaCA);
var area = (catetoBC*catetoAB)/2;
console.log(area);
var perimetro = catetoAB + catetoBC + ipotenusaCA;
console.log(perimetro);




var arrayCateri = [catetoBC,catetoAB];
var catetoMinore = Math.min(...arrayCateri);
var fii = Math.round((ipotenusaCA/catetoMinore)*100)/100;
console.log(fii);
var areaKeplero =(fii * Math.pow(catetoMinore,2));
console.log(areaKeplero);
if (areaKeplero == area) {
  alert(`Il triangolo rettangolo da te definito è un Triangolo di Keplero di area ${area} e perimetro ${perimetro}`);
} else {
  alert(`Il triangolo rettangolo da te definito ha area ${Math.round(area)} e perimetro ${Math.round(perimetro)}, ma non è un Triangolo di Keplero`);
}
