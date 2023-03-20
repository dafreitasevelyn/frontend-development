(function () {
    //Declaración del ENUM
    var granja;
    (function (granja) {
        granja[granja["vaca"] = 3] = "vaca";
        granja[granja["caballo"] = 1] = "caballo";
        granja[granja["cerdo"] = 2] = "cerdo";
        granja[granja["gallina"] = 5] = "gallina";
        granja[granja["pato"] = 6] = "pato";
    })(granja || (granja = {}));
    // En realidad le estamos pasando:
    // enum granja { undefined, caballo, cerdo, vaca, undefined, gallina, pato }
    var a = granja.cerdo;
    console.log(granja[3]); // vaca
    console.log(granja[4]); // undefined
    console.log(granja[6]); // pato
    console.log(granja.caballo); //1 
})();
