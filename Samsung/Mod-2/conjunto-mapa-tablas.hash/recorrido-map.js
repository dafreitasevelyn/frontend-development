const alumnos = new Map([[1,"Miguel"], [2,"Ana"],[3,"María"], [4,"Eva"], [5,"Leo"]]);
console.log("Primera iteración: usando for <br />");
console.log("El número de alumnos es: "+alumnos.size+" <br />");
for (const [clave, valor] of alumnos)
{
    console.log("Obtenido el elemento: ["+clave+","+valor+"] <br />");
}
console.log("Segunda iteración: usando forEach() <br/>");
console.log("El número de alumnos es: "+alumnos.size+" <br />");
alumnos.forEach((valor,clave) => 
    {
    console.log("Obtenido el elemento: ["+clave+","+valor+"] <br />");
    console.log("Se elimina <br />");
    alumnos.delete(clave);
    console.log("Número de elementos restantes: "+alumnos.size+" <br />");
    })