import {telefono} from './telefono'
import {direccion} from './direccion'
import {mail} from './mail'
import {persona} from './persona'

var dniBusqueda = "123456D"

var telefonoRob = new telefono("fijo", 12345678)
var direccionRob = new direccion("Rafaela", 8, 1, "D", 28033, "Madrid", "Madrid")
var mailRob = new mail("gmail", "rob@gmail.com")
var Rob = new persona("Roberto", "Gutierrez", 28, "123456D", new Date("10/06/94"), "Verde", "Masculino", [direccionRob],[mailRob],[telefonoRob],"")

var telefonoEve = new telefono("fijo", 87654321)
var direccionEve = new direccion("Aristoteles", 6, 5, "A", 21078, "Madrid", "Madrid")
var mailEve = new mail("hotmail", "evelyn@hotmail.com")
var Eve = new persona("Evelyn", "Freitas", 28, "789456A", new Date("22/10/94"), "Rosado", "Femenino", [direccionEve], [mailEve], [telefonoEve], "")


var telefonoCaro = new telefono("fijo", 98732145)
var direccionCaro = new direccion("Concepcion", 4, 4, "B", 28011, "Madrid", "Madrid")
var mailCaro = new mail("hotmail", "carolina@hotmail.com")
var Caro = new persona("Carolina", "Torres", 28, "789456A", new Date("11/11/94"), "Morado", "Femenino", [direccionCaro], [mailCaro], [telefonoCaro], "")

var venezolanos = [Rob, Eve, Caro]

for (var veneco of venezolanos) {
    if (veneco.dni == dniBusqueda){
        var direccionAdicional = new direccion("Cervera", 6, 5, "A", 21070, "Madrid", "Madrid")
        var telefonoNuevo =new telefono("fijo", 74185296)
        var mailNuevo = new mail("hotmail", "roberto02@hotmail.com")
        veneco.direcciones.push(direccionAdicional)
        veneco.mails.push(mailNuevo)
        veneco.telefonos.push(telefonoNuevo)
        console.log(veneco)

    }
}