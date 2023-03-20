const mapa = new Map();
mapa.set("uno", "coche");
mapa.set("dos", "moto");
mapa.set("tres", "bici");
console.log(Array.from(mapa));
console.log("<br />");
 
if (mapa.has("dos")) 
{
    console.log("Contiene la clave 'dos' y su valores: "+mapa.get('dos')+" <br />");
}
else
{
    console.log("No contiene la clave 'dos' <br />");
}
console.log("<br />");
mapa.delete ("dos");
mapa.set("dos", "moto");
console.log(Array.from(mapa));
console.log("<br />");
console.log("Las claves son: <br />");
console.log(Array.from(mapa.keys()));
console.log("<br />");
console.log("Los valores son: <br />");
console.log(Array.from(mapa.values()));
console.log("<br />");
console.log("El mapa contiene: "+mapa.size+" elementos <br />");
mapa.clear();
console.log("El mapa contiene: "+mapa.size+" elementos <br />");