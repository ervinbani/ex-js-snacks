//creazione di 10 oggetti zucchina
var zucchina1 = {
  "varietà" : "Bolognese",
  "peso" : 90,
  "lunghezza" : 15,
};
var zucchina2 = {
  "varietà" : " Piacenza",
  "peso" : 80,
  "lunghezza" : 18,
};
var zucchina3 = {
  "varietà" : " Piacenza",
  "peso" : 80,
  "lunghezza" : 13,
};
var zucchina4 = {
  "varietà" : " varietà4",
  "peso" : 82,
  "lunghezza" : 19,
};
var zucchina5 = {
  "varietà" : " varietà5",
  "peso" : 78,
  "lunghezza" : 16,
};
var zucchina6 = {
  "varietà" : " varietà6",
  "peso" : 77,
  "lunghezza" : 17,
};
var zucchina7 = {
  "varietà" : " varietà7",
  "peso" : 75,
  "lunghezza" : 10,
};
var zucchina8 = {
  "varietà" : " varietà5",
  "peso" : 71,
  "lunghezza" : 10,
};
var zucchina9 = {
  "varietà" : " varietà9",
  "peso" : 65,
  "lunghezza" : 13,
};
var zucchina10 = {
  "varietà" : " varietà10",
  "peso" : 66,
  "lunghezza" : 12,
};

//creo inizialmente un array con tutti gli oggetti.
var arrayZucchina = [zucchina1, zucchina2, zucchina3, zucchina4, zucchina5, zucchina6,zucchina7, zucchina8, zucchina9, zucchina10];
//creo due array vuoti dove vado a pushare oggeti in base alla lunghezza della zucchina
var array1=[];//array com elementi di lung minore o uguale 15 cm
var array2=[];//array con elementi > i 15 cm

//istruzioni per controllare gli elemento dell'oggetto arrayZucchina e pushare
for(var i=0; i<arrayZucchina.length;i++){
  if(arrayZucchina[i].lunghezza<=15){
    array1.push(arrayZucchina[i]);
  }
  else if(arrayZucchina[i].lunghezza>15){
    array2.push(arrayZucchina[i]);
  }
}

 sommaPeso1=0;
 for(var i=0; i<array1.length; i++){
   sommaPeso1=sommaPeso1+array1[i].peso;
 }
 sommaPeso2=0;
 for(var i=0; i<array2.length; i++){
   sommaPeso2=sommaPeso2+array2[i].peso;
 }



//istruzioni che stampano i due array divisi
console.log("array con elementi di lunghezza sotto 15 cm", array1);
console.log("array con elementi di lunghezza sopra 15 cm", array2);
console.log("sommarray 1", + sommaPeso1);
console.log("sommarray 1", + sommaPeso2);
