//oggetto zucchine, peso in gr, lunghezza in cm
var zucchina1 = {
  "varietà" : "Bolognese",
  "peso" : 90,
  "lunghezza" : 15
};
var zucchina2 = {
  "varietà" : " Piacenza",
  "peso" : 80,
  "lunghezza" : 13
};
var zucchina3 = {
  "varietà" : " Piacenza",
  "peso" : 80,
  "lunghezza" : 13
};
var zucchina4 = {
  "varietà" : " varietà4",
  "peso" : 82,
  "lunghezza" : 12
};
var zucchina5 = {
  "varietà" : " varietà5",
  "peso" : 78,
  "lunghezza" : 16
};
var zucchina6 = {
  "varietà" : " varietà6",
  "peso" : 77,
  "lunghezza" : 17
};
var zucchina7 = {
  "varietà" : " varietà7",
  "peso" : 75,
  "lunghezza" : 10
};
var zucchina8 = {
  "varietà" : " varietà5",
  "peso" : 71,
  "lunghezza" : 10
};
var zucchina9 = {
  "varietà" : " varietà9",
  "peso" : 65,
  "lunghezza" : 13
};
var zucchina10 = {
  "varietà" : " varietà10",
  "peso" : 66,
  "lunghezza" : 12
};

//array di oggetti
var arrayZucchina= [zucchina1, zucchina2, zucchina3, zucchina4, zucchina5, zucchina6,zucchina7, zucchina8, zucchina9, zucchina10];

//funzione che calcola la somma dei pesi
sommaPeso=0;
for(var i=0; i<arrayZucchina.length; i++){
  sommaPeso=sommaPeso+arrayZucchina[i].peso;
}
somma=zucchina1.peso+zucchina2.peso+zucchina3.peso+zucchina4.peso+zucchina5.peso+zucchina6.peso+zucchina7.peso+zucchina8.peso+zucchina9.peso+zucchina10.peso
document.write("peso totale =  ", + sommaPeso);
document.write("peso totale =  ", + somma);
