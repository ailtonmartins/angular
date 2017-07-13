"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var TAKS = [
    { id: 1, name: "Trabalhar" },
    { id: 2, name: "Lavar Pratos" },
    { id: 3, name: "Tirar poeira" },
    { id: 4, name: "Comprar no supermercado" },
    { id: 5, name: "Cuidar das crianças" },
    { id: 6, name: "Jogar Video Game" },
    { id: 7, name: "Almoçar" },
    { id: 8, name: "Jantar" },
    { id: 9, name: "Fazer exercicios" },
    { id: 10, name: "Pagar as Contas" },
];
var TaskEditComponent = (function () {
    function TaskEditComponent() {
    }
    __decorate([
        core_1.Input()
    ], TaskEditComponent.prototype, "task", void 0);
    TaskEditComponent = __decorate([
        core_1.Component({
            selector: 'task-edit',
            template: "\n    <div *ngIf=\"task\">\n        <input type=\"text\" [(ngModel)]=\"task.name\"/>\n    </div>\n    "
        })
    ], TaskEditComponent);
    return TaskEditComponent;
}());
exports.TaskEditComponent = TaskEditComponent;
var AppComponent = (function () {
    function AppComponent() {
        this.title = {
            name: 'Ailton teste',
            descript: 'Teste Angular2'
        };
        this.tasks = TAKS;
    }
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{ title }}</h1>\n      <input [(ngModel)]=\"title.name\">      \n      <input [value]=\"title.name\">      \n      <br>\n      {{title.name}}\n      <br>\n      {{title.descript}}\n      <hr>\n      <ul>\n         <li *ngFor=\"let o of tasks\" (click)=\"onClick(o)\" >\n              {{o.id}} - {{o.name}}\n         </li>\n      </ul>\n      <task-edit [task]=\"selectedTask\"></task-edit>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map