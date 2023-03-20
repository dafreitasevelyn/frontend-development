var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.animalName = name;
    }
    Animal.prototype.numeroPatas = function (patas) {
        this.patas = patas;
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(name) {
        return _super.call(this, name) || this;
    }
    Perro.prototype.saludo = function () {
        console.log('Guau soy ' + this.animalName);
    };
    return Perro;
}(Animal));
var Vaca = /** @class */ (function (_super) {
    __extends(Vaca, _super);
    function Vaca(name) {
        return _super.call(this, name) || this;
    }
    Vaca.prototype.saludo = function () {
        console.log('Muuuu soy ' + this.animalName);
    };
    return Vaca;
}(Animal));
var miPerro1 = new Perro('Rober');
miPerro1.saludo();
var miPerro2 = new Perro('Rhin');
miPerro2.saludo();
var miVaca1 = new Vaca('Nervi');
miVaca1.saludo();
var miVaca2 = new Vaca('Guapa');
miVaca2.saludo();
