class Cola {
    constructor() {
        this.items = [];
    }
    encolar (elem) {
        this.items.push(elem);
        return this.items;
    }
    longitud(){
        return this.items.length
    }
    imprimirCola() {
        console.log(this.items);
    }
    desencolar () {
        this.items.shift();
        return this.items;
    }
    frente() {
        return this.items[0];
    }
    esColaVacia() {
        return this.items.length === 0;
    }
}


class Pila {
    constructor() 
    {
        this.items = [];
    }
    
    // crearPilaVacia () 
    // {
    //     this.items = [];
    //     return this.items;
    // }
    longitud(){
        return this.items.length
    }

    apilar (elem) 
    {
        this.items.push(elem);
        return this.items;
    }
    desapilar () {
    return this.items.pop();
    } 

    imprimirPila() {
    console.log(this.items);
    } 
   
}
class Lista 
    {
        constructor() 
        {
            this.items = [];
            this.posicion = -1;
        }
        
        crearListaVacia () 
        {
            this.items = [];
            this.posicion = -1;
            return this.items;
        }
        
        inicio () 
        {
            if (this.items.length === 0) 
            {
                this.posicion = -1
            }
            else 
            {
                this.posicion = 0;
            }
        }
        
        fin () 
        {
            if (this.items.length === 0) 
            {
                this.posicion = -1
            }
            else 
            {
                this.posicion = this.items.length - 1;
            }
        }
        
        siguiente () 
        {
            if (this.posicion < this.items.length - 1) 
            {
                if (this.posicion >= 0) 
                {
                    this.posicion++;
                }
            }
        }
        
        anterior () 
        {
            if (this.posicion > 0) 
            {
                this.posicion--;
            }
        }
        
        esPrimerElemento () 
        {
            if (this.posicion === -1) 
            {
                return undefined;
            }
            if (this.posicion === 0) 
            {
                return true;
            }
            else 
            {
                return false;
            }
        }
        
        esUltimoElemento () 
        {
            if (this.posicion === -1) 
            {
                return undefined;
            }
            if (this.posicion === this.items.length - 1) 
            {
                return true;
            }
            else 
            {
                return false;
            }
        }
        
        insertar (elemento) 
        {
            if (this.posicion === -1) 
            {
                this.items.push(elemento);
                this.posicion = 0;
            }
            else 
            {
                this.items.splice(this.posicion,0,elemento);
            }
            return this.items;
        }
            
        borrar () 
        {
            if (this.posicion !== -1) 
            {
                this.items.splice(this.posicion,1);
                if (this.items.length === 0) 
                {
                    this.posicion = -1;
                }
                else if (this.items.length === this.posicion) 
                {
                    this.posicion --;
                }
            }
            return this.items;
        }
        
        elemento() 
        {
            if (this.items.length === 0) 
            {
                return undefined;
            }
            else 
            {
                return this.items[this.posicion];
            }
        }
        
        esListaVacia() 
        {
            return (this.items.length === 0);
        }
    
        imprimirLista() 
        {
        console.log(this.items);
        }
        ordenar() 
        {
        return this.items.sort().reverse()
        }
    }


const colaInicial = new Cola();
colaInicial.encolar(2)
colaInicial.encolar(6)
colaInicial.encolar(3)
colaInicial.encolar(9)
colaInicial.encolar(5)
colaInicial.encolar(1)
colaInicial.desencolar()
const pilaInicial = new Pila();
pilaInicial.apilar(6)
pilaInicial.apilar(2)
pilaInicial.apilar(3)
pilaInicial.apilar(3)
pilaInicial.apilar(3)
pilaInicial.apilar(9)
pilaInicial.apilar(1)
pilaInicial.apilar(8)
pilaInicial.apilar(7)
pilaInicial.desapilar()

const lista = new Lista()
for(var i=0;colaInicial.longitud()>0;i++)
{
    lista.insertar(colaInicial.frente())
    colaInicial.desencolar()
}
pilaInicial.imprimirPila()
for(var i=0;pilaInicial.longitud()>0;i++)
{
    lista.insertar(pilaInicial.desapilar())
}
console.log("Despues del for ")
pilaInicial.imprimirPila()
lista.imprimirLista()
lista.ordenar()
lista.imprimirLista()

