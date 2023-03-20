export class telefono{
    _tipo: string;
    _numero: number;

    constructor (
        tipo: string, 
        direccion:number
    ) {
        this._tipo= tipo;
        this._numero= direccion;
    }

    get tipo():string {
        return this._tipo   
    }
    set tipo(value:string) {
        this._tipo= value;   
    }
    get numero():number {
        return this._numero   
    }
    set numero(value:number) {
        this._numero = value;   
    }
}