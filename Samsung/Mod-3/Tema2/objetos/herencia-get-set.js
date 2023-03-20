class Animal {
    constructor(name) {
        this._animalName = name;
    }
    get animalName() {
        return this._animalName;
    }
    set animalName(value) {
        this._animalName = value;
    }
    get patas() {
        return this._patas;
    }
    set patas(value) {
        this._patas = value;
    }
}
class Perro extends Animal {
    constructor(name) {
        super(name);
    }
    saludo() {
        console.log('Guau soy ' + this.animalName);
    }
}
class Vaca extends Animal {
    constructor(name) {
        super(name);
    }
    saludo() {
        console.log('Muuuu soy ' + this.animalName);
    }
}
let miPerro1 = new Perro('Rober');
miPerro1.saludo();
let miPerro2 = new Perro('Rhin');
miPerro2.saludo();
let miVaca1 = new Vaca('Nervi');
miVaca1.saludo();
let miVaca2 = new Vaca('Guapa');
miVaca2.saludo();
