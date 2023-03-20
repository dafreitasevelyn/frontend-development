abstract class Animal {
        private _animalName: string; 
        private _patas: number;
    constructor (name: string){
        this._animalName = name;
    }
    public get animalName(): string {
        return this._animalName;
    }
    public set animalName(value: string) {
        this._animalName= value;
    }
    public get patas(): number {
        return this._patas;
    }
    public set patas(value: number) {
        this._patas= value;
    }
    abstract saludo(): void;
} 
class Perro extends Animal {
    constructor (name: string){
    super(name);
    }
    saludo() {
    console.log ('Guau soy ' + this. animalName);
    }
} 

class Vaca extends Animal {
    constructor (name: string){
    super(name);
    }
    saludo() {
    console.log ('Muuuu soy ' + this. animalName);
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

// se precisará indicar al compilador la opción de compilación adecuada: tsc -t es6 <nombre del fichero.ts>.