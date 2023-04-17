import {Component}  from '@angular/core'
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="operacion('+');">+{{base}}</button>
        <span> {{numero}} </span>
        <button (click)="operacion('-')">-{{base}}</button>
    `
})
export class contadorComponent{
    public titulo: string = 'ContadorApp';
    public numero: number = 10;
    public base: number = 5
    operacion(operator:string){
        if(operator == '+'){
        this.base += 5;
        console.log(operator)
        }
        if(operator == '-'){
        this.base -= 5;
        }
    }
}