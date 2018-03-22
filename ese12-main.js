/*si scriva una funzione che accetta tre argomenti, un array e due numeri
La funzione ritornerà il numero degli elementi all'interno dell'array compresi
tra i due numeri*/


var array=[1, 4, 3, "d", 8, 3, 5, "a", "d", 8, 9, 4, 7, 9, 0, 22, 11];
var num1=prompt("inserisci un numero");
var num2=prompt("inserisci un altro numero");


//istruzioni per calcolare gli indici dei due elementi inseriti nell'array
var index1=array.indexOf(num1);
var index2=array.indexOf(num2);

var numElementi=index2-index1;

console.log(numElementi);
