const conjunto = new Set();
 console.log([...conjunto]);
 console.log("<br />");
 conjunto.add(100);
 conjunto.add("hola");
 conjunto.add(false);
 console.log([...conjunto.values()]); //imprime el conjunto: 100,hola,false
 console.log("<br />");
 console.log("El conjunto contiene: "+conjunto.size+" elementos <br />");//El conjunto contiene: 3 elemntos
 conjunto.clear(); //borra los elemento del conjunto
 console.log("El conjunto contiene: "+conjunto.size+" elementos <br />");//El conjunto contiene: 0 elemntos