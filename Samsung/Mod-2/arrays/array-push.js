var numeros=[0,1];
var indice=2;
var siguiente=0
while(numeros.length<100)
{
    siguiente=numeros[indice-1]+numeros[indice-2];
    numeros.push(siguiente)
    indice++;
    
}

console.log(numeros.length)