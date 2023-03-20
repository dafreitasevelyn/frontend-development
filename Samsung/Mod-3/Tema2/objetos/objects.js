var Coche = /** @class */ (function () {
    function Coche(a, b) {
        this.marca = a;
        this.modelo = b;
    }
    Coche.prototype.mostrarDatos = function () {
        console.log(this.marca, this.modelo);
    };
    return Coche;
}());
var coche1 = new Coche("Seat", "Altea");
coche1.mostrarDatos(); //Seat Altea
