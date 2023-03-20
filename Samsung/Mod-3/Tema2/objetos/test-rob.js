class Coche {
    marca: string;
    modelo: string;
    constructor(a: string, b: string) 
    {
        this.marca= a;
        this.modelo = b;  
    }
    mostrarDatos(): void
    {
    console.log(this.marca, this.modelo);
    }
}
var coche1 = new Coche("Seat", "Altea");
coche1.mostrarDatos(); //Seat Altea
    