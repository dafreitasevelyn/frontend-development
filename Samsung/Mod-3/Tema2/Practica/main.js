"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telefono_1 = require("./telefono");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var dniBusqueda = "123456D";
var telefonoRob = new telefono_1.telefono("fijo", 12345678);
var direccionRob = new direccion_1.direccion("Rafaela", 8, 1, "D", 28033, "Madrid", "Madrid");
var mailRob = new mail_1.mail("gmail", "rob@gmail.com");
var Rob = new persona_1.persona("Roberto", "Gutierrez", 28, "123456D", new Date("10/06/94"), "Verde", "Masculino", [direccionRob], [mailRob], [telefonoRob], "");
var telefonoEve = new telefono_1.telefono("fijo", 87654321);
var direccionEve = new direccion_1.direccion("Aristoteles", 6, 5, "A", 21078, "Madrid", "Madrid");
var mailEve = new mail_1.mail("hotmail", "evelyn@hotmail.com");
var Eve = new persona_1.persona("Evelyn", "Freitas", 28, "789456A", new Date("22/10/94"), "Rosado", "Femenino", [direccionEve], [mailEve], [telefonoEve], "");
// console.log(Eve)
var telefonoCaro = new telefono_1.telefono("fijo", 98732145);
var direccionCaro = new direccion_1.direccion("Concepcion", 4, 4, "B", 28011, "Madrid", "Madrid");
var mailCaro = new mail_1.mail("hotmail", "carolina@hotmail.com");
var Caro = new persona_1.persona("Carolina", "Torres", 28, "789456A", new Date("11/11/94"), "Morado", "Femenino", [direccionCaro], [mailCaro], [telefonoCaro], "");
// console.log(Caro)
var venezolanos = [Rob, Eve, Caro];
for (var _i = 0, venezolanos_1 = venezolanos; _i < venezolanos_1.length; _i++) {
    var veneco = venezolanos_1[_i];
    // console.log(veneco)
    if (veneco.dni == dniBusqueda) {
        var direccionAdicional = new direccion_1.direccion("Cervera", 6, 5, "A", 21070, "Madrid", "Madrid");
        var telefonoNuevo = new telefono_1.telefono("fijo", 74185296);
        var mailNuevo = new mail_1.mail("hotmail", "roberto02@hotmail.com");
        veneco.direcciones.push(direccionAdicional);
        veneco.mails.push(mailNuevo);
        veneco.telefonos.push(telefonoNuevo);
        console.log(veneco);
    }
}
