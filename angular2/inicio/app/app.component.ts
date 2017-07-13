import {Component, Input} from '@angular/core';

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
    selector: 'task-edit',
    template: `
    <div *ngIf="task">
        <input type="text" [(ngModel)]="task.name"/>
    </div>
    `
})

export class TaskEditComponent{
    @Input()
    task:Task;
}

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
         <li *ngFor="let o of tasks" (click)="onClick(o)" >
              {{o.id}} - {{o.name}}
         </li>
      </ul>
      <task-edit [task]="selectedTask"></task-edit>
    `
})

export class AppComponent{
    title = {
              name:'Ailton teste',
              descript: 'Teste Angular2'
            };

    tasks:Task[] = TAKS;
    selectedTask:Task;

    onClick(task){
        this.selectedTask = task;
    }

}