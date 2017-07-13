import {Component} from '@angular/core';

class Task{
    id:number;
    name:string;
}

let TAKS:Task[] = [
    {id: 1 , name: "Trabalhar"},
    {id: 2 , name: "Lavar Pratos"},
    {id: 3 , name: "Tirar poeira"},
    {id: 4 , name: "Comprar no supermercado"},
    {id: 5 , name: "Cuidar das crianças"},
    {id: 6 , name: "Jogar Video Game"},
    {id: 7 , name: "Almoçar"},
    {id: 8 , name: "Jantar"},
    {id: 9 , name: "Fazer exercicios"},
    {id: 10 , name: "Pagar as Contas"},
];

@Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <input [(ngModel)]="title.name">      
      <input [value]="title.name">      
      <br>
      {{title.name}}
      <br>
      {{title.descript}}
      <hr>
      <ul>
         <li *ngFor="let o of tasks" (click)="onClick($event, o)" >
              {{o.id}} - {{o.name}}
         </li>
      </ul>
    `
})

export class AppComponent{
    title = {
              name:'Ailton teste',
              descript: 'Teste Angular2'
            };

    tasks:Task[] = TAKS;

    onClick(event , obj){
         console.log({event,obj});
    }

}