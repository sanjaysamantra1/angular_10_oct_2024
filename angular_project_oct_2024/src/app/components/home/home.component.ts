import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { TodoCrudComponent } from '../todo-crud/todo-crud.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterComponent,TodoCrudComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
