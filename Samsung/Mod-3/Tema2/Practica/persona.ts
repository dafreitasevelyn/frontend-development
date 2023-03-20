import { telefono } from './telefono'
import { direccion } from './direccion'
import { mail } from './mail'

export class persona {
     _nombre: string
     _apellido: string
     _edad: number
     _dni: string
     _cumpleaños: Date
     _colorFavorito: string
     _sexo: string
     _direcciones: direccion[]
     _mails: mail[]
     _telefonos: telefono[]
     _notas: string

     constructor(
          nombre: string,
          apellido: string,
          edad: number,
          dni: string,
          cumpleaños: Date,
          colorFavorito: string,
          sexo: string,
          direcciones: direccion[],
          mails: mail[],
          telefonos: telefono[],
          notas: string
     ) {
          this._nombre = nombre
          this._apellido = apellido
          this._edad = edad
          this._dni = dni
          this._cumpleaños = cumpleaños
          this._colorFavorito = colorFavorito
          this._sexo = sexo
          this._direcciones = direcciones
          this._mails = mails
          this._telefonos = telefonos
          this._notas = notas
     }

     get nombre():string {
          return this._nombre   
     }
     
     set nombre(value:string) {
          this._nombre= value; 
     } 
     
     get apellido():string {
          return this._apellido   
     }
    
     set apellido(value:string) {
          this._apellido= value; 
     }

     get edad():number {
          return this._edad   
     }
     
     set edad(value:number) {
          this._edad= value; 
     }

     get dni():string {
          return this._dni   
     }
     
     set dni(value:string) {
          this._dni= value; 
     }

     get cumpleaños():Date {
          return this._cumpleaños   
     }
     
     set cumpleaños(value:Date) {
          this._cumpleaños= value; 
     } 
     
     get colorFavorito():string {
          return this._colorFavorito   
     }
     
     set colorFavorito(value:string) {
          this._colorFavorito= value; 
     }

     get sexo():string {
          return this._sexo   
     }
     
     set sexo(value:string) {
          this._sexo= value; 
     }

     get direcciones():direccion[] {
          return this._direcciones   
     }
     
     set direcciones(value:direccion[]) {
          this._direcciones= value; 
     }

     get mails():mail[] {
          return this._mails   
     }
     
     set mails(value:mail[]) {
          this._mails= value; 
     }

     get telefonos():telefono[] {
          return this._telefonos   
     }
     
     set telefonos(value:telefono[]) {
          this._telefonos= value; 
     }

}