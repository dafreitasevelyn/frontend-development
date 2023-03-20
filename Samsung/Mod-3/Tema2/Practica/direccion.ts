export class direccion {
    _calle: string;
    _numero: number;
    _piso:  number;
    _letra: string;
    _codigopostal:number;
    _poblacion: string;
    _provincia: string;

    constructor (
        calle:string, 
        numero:number, 
        piso:number, 
        letra:string,  
        codigopostal:number, 
        poblacion:string, 
        provincia:string 
    
    ) {
       
        this._calle= calle;
        this._numero= numero;
        this._piso= piso;
        this._letra= letra;
        this._codigopostal= codigopostal;
        this._poblacion= poblacion;
        this._provincia= provincia;
    }

    get calle():string {
        return this._calle   
    }
   
   set calle(value:string) {
        this._calle= value; 
    } 
   
   get numero():number {
        return this._numero   
    }
  
   set numero(value:number) {
        this._numero= value; 
    }

   get piso():number {
        return this._piso   
    }
   
   set piso(value:number) {
        this._piso= value; 
    }

   get letra():string {
        return this._letra   
    }
   
   set letra(value:string) {
        this._letra= value; 
    } 
   
   get codigopostal():number {
        return this._codigopostal   
    }
   
   set codigopostal(value:number) {
        this._codigopostal= value; 
    }

   get poblacion():string {
        return this._poblacion   
    }
   
   set poblacion(value:string) {
        this._poblacion= value; 
    }

    get provincia():string {
        return this._provincia   
    }

    set provincia(value:string) {
        this._provincia= value; 
    }   

}