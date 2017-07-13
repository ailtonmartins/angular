import {Component} from '@angular/core';

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
    `
})

export class AppComponent{
    title = {
              name:'Ailton teste',
              descript: 'Teste Angular2'
            };
}