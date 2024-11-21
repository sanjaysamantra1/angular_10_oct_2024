import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo, toggleTodo } from '../../ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css'
})
export class TodoCrudComponent {
  todoArr: any;

  constructor(private store: Store<any>) {
    this.store.select('todoArr').subscribe(storeData => {
      this.todoArr = storeData;
    })
  }
  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id: id }));
  }
}
