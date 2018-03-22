var array1=[1, 2, 1, 3];
var array2=["a", "b", "e", "d"];
var mixedarr=[];


for(var i=0;i<array1.length; i++){
  mixedarr.push(array1[i], array2[i]);

}
console.log(mixedarr);
