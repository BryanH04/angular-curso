import { Component } from "@angular/core";

@Component({
     selector:'app-heroe',
     templateUrl: 'heroe.component.html'
})
 export class HeroeComponent{
    nombre: string = 'Arturia Pendragon';
    edad: number = 15;
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
     obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;//Esta forma permite crear templates de un String 
        /*El return monstado en la pagina 11 significa lo mismo que el return de la linea 12
        return this.nombre + ' - ' + this.edad.toString();*/
     }
     cambiarNombre():void{
        this.nombre = 'Medusa';
     }
     cambiarEdad():void{
        this.edad = 20;
     }

} 