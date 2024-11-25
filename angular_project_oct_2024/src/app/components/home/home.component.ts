import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { TodoCrudComponent } from '../todo-crud/todo-crud.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { MaterialDemoComponent } from '../material-demo/material-demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CounterComponent,
    TodoCrudComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    MaterialDemoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
