import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

const initialTodos = [
  { id: 1, value: 'Todo 1' },
  { id: 2, value: 'Todo 2' },
];
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoSubject = new BehaviorSubject<Todo[]>(initialTodos);
  readonly todoObs = this.todoSubject.asObservable();

  private todosArr: Todo[] = initialTodos;
  private nextId = 2;
  create(item: Todo) {
    item.id = ++this.nextId;
    this.todosArr.push(item);
    this.todoSubject.next(Object.assign([], this.todosArr));
  }
  remove(id: number) {
    this.todosArr.forEach((todo, ind) => {
      if (todo.id === id) {
        this.todosArr.splice(ind, 1);
      }
      this.todoSubject.next(Object.assign([], this.todosArr));
    });
  }
}
