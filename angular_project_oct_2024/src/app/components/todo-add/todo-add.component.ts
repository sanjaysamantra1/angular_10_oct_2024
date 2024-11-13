import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}
  addNewTodo(todoText: string) {
    this.todoService.create({ id: 3, value: todoText });
  }
}
