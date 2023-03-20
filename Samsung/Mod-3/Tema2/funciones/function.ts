function suma(x:number, y:number): number 
    {
    let total:number = x + y;
    return total;
    }
    console.log(suma(89,12)); //101

   
    // funcion anónima
var suma= function (x:number, y:number):number 
    {
    return x + y;
    }
    var resultado:number = suma (3,5);
    console.log (resultado); //8

    
    // funcion flecha
let suma = (x: number, y: number): number => 
    {
    return x + y;
    }
    console.log (suma(10, 25)); // 35
           
    //Método
class Ficha 
    {
    nombre: string;
    edad: number;
    constructor(a: string, b: number) 
        {
        this.nombre = a;
        this.edad = b;
        }
    getEdad() : number 
        {
         return this.edad;
        }
    }
    let s=new Ficha("Juan",22);
    console.log(s.getEdad()); //22

    // Parámetro por defecto
function suma(x:number, y:number, z:number=1): number {
    return x + y + z;
    }
    console.log(suma(7,8)); //16


//Parámetro opcional
function suma(x:number, y:number, z?:number): number { // el ? al final del nombre del parametro
    if (z) return x + y + z;
    else return x + y;
    }
    console.log(suma(7,8)); //15
    console.log(suma(7,8,3)); //18

    
//Rest (...)
function suma(...lista:number[]) {
    let resultado=0;
    for(let i=0;i<lista.length;i++)
    resultado+=lista[i];
    return resultado;
    }
    console.log(suma(7,8)); //15
    console.log(suma(7,8,3)); //18

//EjemploRob
function suma(lista:number[]) {
    let resultado=0;
    for(let i=0;i<lista.length;i++)
    resultado+=lista[i];
    return resultado;
    }
console.log(suma([2,3,4]))
    
//spread
let tabla = [31, 15, 17, 23, 19];
let minimo =Math.min(...tabla);
console.log(minimo); // 15

//funciones como parametros
function suma (a:number,b:number):number {
    return a+b;
   }
   var calculo=function operacion(a:number,b:number,f:(c:number,d:number)=>
   number ): number {
    return f(a,b);
    }
console.log(calculo(21,4,suma)); //25

//union de tipos
function suma(x: number | string, y: number | string ): number | string {
    if (typeof x ==='number' && typeof y ==='number')
    return x+y;
    else
    return x.toString() + y.toString();
    }
    console.log(suma(21,4)); //25
    console.log(suma('hola ',4)); //hola 4
