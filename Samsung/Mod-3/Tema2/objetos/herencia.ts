abstract class Animal {
    animalName: string;
    patas: number;
    constructor (name: string){
    this.animalName = name;
    }
    numeroPatas(patas: number){
    this.patas= patas;
    }
    abstract saludo():void;
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