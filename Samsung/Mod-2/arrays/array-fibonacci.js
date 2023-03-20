var numeros=[];
var indice=0;
var siguiente=0
while(numeros.length<100)
{
    if(indice==0)
    {
        numeros.push(0);
        
    }else if(indice==1)
    {
        numeros.push(1);
        
    }else
    {
    siguiente=numeros[indice-1]+numeros[indice-2];
    numeros.push(siguiente)
    
    }
    indice++;
}

console.log(numeros)