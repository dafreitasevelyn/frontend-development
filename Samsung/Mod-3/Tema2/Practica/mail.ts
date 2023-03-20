export class mail {
    _tipo: string;
    _direccion: string;

    constructor(
        tipo:string, 
        direccion:string
        
    ) {
        this._tipo= tipo;
        this._direccion= direccion;
        
    }

    get notipombre():string {
        return this._tipo   
   }
   
   set tipo(value:string) {
        this._tipo= value; 
   } 
   
   get direccion():string {
        return this._direccion   
   }
  
   set direccion(value:string) {
        this._direccion= value; 
   }
}