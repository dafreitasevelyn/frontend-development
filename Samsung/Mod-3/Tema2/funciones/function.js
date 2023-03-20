function suma(x, y) {
    var total = x + y;
    return total;
}
console.log(suma(89, 12)); //101
// funcion anónima
var suma = function (x, y) {
    return x + y;
};
var resultado = suma(3, 5);
console.log(resultado); //8
// funcion flecha
var suma = function (x, y) {
    return x + y;
};
console.log(suma(10, 25)); // 35
//Método
var Ficha = /** @class */ (function () {
    function Ficha(a, b) {
        this.nombre = a;
        this.edad = b;
    }
    Ficha.prototype.getEdad = function () {
        return this.edad;
    };
    return Ficha;
}());
var s = new Ficha("Juan", 22);
console.log(s.getEdad()); //22
// Parámetro por defecto
function suma(x, y, z) {
    if (z === void 0) { z = 1; }
    return x + y + z;
}
console.log(suma(7, 8)); //16
//Parámetro opcional
function suma(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
console.log(suma(7, 8)); //15
console.log(suma(7, 8, 3)); //18
//Rest (...)
function suma() {
    var lista = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lista[_i] = arguments[_i];
    }
    var resultado = 0;
    for (var i = 0; i < lista.length; i++)
        resultado += lista[i];
    return resultado;
}
console.log(suma(7, 8)); //15
console.log(suma(7, 8, 3)); //18
//EjemploRob
function suma(lista) {
    var resultado = 0;
    for (var i = 0; i < lista.length; i++)
        resultado += lista[i];
    return resultado;
}
console.log(suma([2, 3, 4]));
//spread
var tabla = [31, 15, 17, 23, 19];
var minimo = Math.min.apply(Math, tabla);
console.log(minimo); // 15
//funciones como parametros
function suma(a, b) {
    return a + b;
}
var calculo = function operacion(a, b, f) {
    return f(a, b);
};
console.log(calculo(21, 4, suma)); //25
//union de tipos
function suma(x, y) {
    if (typeof x === 'number' && typeof y === 'number')
        return x + y;
    else
        return x.toString() + y.toString();
}
console.log(suma(21, 4)); //25
console.log(suma('hola ', 4)); //hola 4
