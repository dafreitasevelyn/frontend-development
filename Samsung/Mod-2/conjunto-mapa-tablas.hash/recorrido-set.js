const alumnos = new Set(["Miguel", "Ana", "María", "Eva", "Leo"]);
    console.log("El número de alumnos es: "+alumnos.size+" <br/>");
for (const elemento of alumnos) 
{
    console.log("Obtenido el elemento: "+elemento+"<br/>");
    console.log("Se elimina <br/>");
    alumnos.delete(elemento);
    console.log("Número de elementos restantes: "+alumnos.size+" <br/>");
}